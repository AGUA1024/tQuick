package main

import (
	"github.com/AGUA1024/tQuick/cmd/tq/subCmd"
	"github.com/spf13/cobra"
)

var serveCmd = &cobra.Command{
	Use:  "tq",
	Long: `tq is a command-line tool that comes with the tQuick framework and allows you to initialize projects or generate api code.`,
	Run: func(cmd *cobra.Command, args []string) {
		cmd.Help()
	},
}

func main() {
	serveCmd.AddCommand(subCmd.GenApiCmd)
	serveCmd.AddCommand(subCmd.GenDbModelCmd)
	serveCmd.AddCommand(subCmd.ProjectInitCmd)
	serveCmd.Execute()
}
