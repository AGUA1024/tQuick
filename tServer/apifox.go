package tServer

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

type ApifoxModel struct {
	// 导入结果
	Data Data `json:"data"`
	// 接口状态
	Success bool `json:"success"`
}

// 导入结果
type Data struct {
	// 导入接口情况
	APICollection APICollection `json:"apiCollection"`
	// 导入数据模型情况
	SchemaCollection SchemaCollection `json:"schemaCollection"`
}

// 导入接口情况
type APICollection struct {
	// 接口目录
	Folder APICollectionFolder `json:"folder"`
	// 接口
	Item APICollectionItem `json:"item"`
}

// 接口目录
type APICollectionFolder struct {
	// 新增的目录数
	CreateCount int64 `json:"createCount"`
	// 导入出错的目录数
	ErrorCount int64 `json:"errorCount"`
	// 忽略的目录数
	IgnoreCount int64 `json:"ignoreCount"`
	// 修改的目录数
	UpdateCount int64 `json:"updateCount"`
}

// 接口
type APICollectionItem struct {
	// 新增的接口数
	CreateCount int64 `json:"createCount"`
	// 导入出错接口数
	ErrorCount int64 `json:"errorCount"`
	// 忽略的接口数
	IgnoreCount int64 `json:"ignoreCount"`
	// 修改的接口数
	UpdateCount int64 `json:"updateCount"`
}

// 导入数据模型情况
type SchemaCollection struct {
	// 数据模型目录
	Folder SchemaCollectionFolder `json:"folder"`
	// 数据模型
	Item SchemaCollectionItem `json:"item"`
}

// 数据模型目录
type SchemaCollectionFolder struct {
	CreateCount int64 `json:"createCount"`
	ErrorCount  int64 `json:"errorCount"`
	IgnoreCount int64 `json:"ignoreCount"`
	UpdateCount int64 `json:"updateCount"`
}

// 数据模型
type SchemaCollectionItem struct {
	// 新增的数据模型数
	CreateCount int64 `json:"createCount"`
	// 出错的数据模型数
	ErrorCount int64 `json:"errorCount"`
	// 忽略的数据模型数
	IgnoreCount int64 `json:"ignoreCount"`
	// 修改的数据模型数
	UpdateCount int64 `json:"updateCount"`
}

func importApi2ApiFox(projectId string, openApiJson string, accessToken string) (bool, error) {
	url := fmt.Sprintf("https://api.apifox.com/api/v1/projects/%s/import-data?locale=zh-CN", projectId)
	method := "POST"

	payload := strings.NewReader(fmt.Sprintf(`{
		"importFormat": "openapi",
		"apiOverwriteMode" : "methodAndPath",
		"schemaOverwriteMode" : "name",
		"data": %s
	}`, openApiJson))

	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)

	if err != nil {
		return false, err
	}
	req.Header.Add("X-Apifox-Version", "2024-01-20")
	req.Header.Add("Authorization", fmt.Sprintf("Bearer %s", accessToken))
	req.Header.Add("User-Agent", "Apifox/1.0.0 (https://apifox.com)")
	req.Header.Add("Content-Type", "application/json")

	res, err := client.Do(req)
	if err != nil {
		return false, err
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return false, err
	}

	result := ApifoxModel{}
	json.Unmarshal(body, &result)

	if result.Success {
		return true, nil
	}

	return false, errors.New(string(body))
}
