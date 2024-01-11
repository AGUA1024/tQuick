package main

import (
	"tQuick/tServer"
)

import _ "main/api/user"

func main() {
	tServer.Run(":8080")
}
