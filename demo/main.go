package main

import (
	"github.com/AGUA1024/tQuick/tServer"
)

import _ "main/api/user"

func main() {
	tServer.Run(":8080")
}
