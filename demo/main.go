package main

import "tQuick/server"
import _ "main/api/user"

func main() {
	server.Run(":8080")
}
