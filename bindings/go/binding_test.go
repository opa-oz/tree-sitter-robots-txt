package tree_sitter_robots_txt_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_robots_txt "github.com/opa-oz/tree-sitter-robots-txt/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_robots_txt.Language())
	if language == nil {
		t.Errorf("Error loading robots_txt grammar")
	}
}
