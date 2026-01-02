import XCTest
import SwiftTreeSitter
import TreeSitterRobotsTxt

final class TreeSitterRobotsTxtTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_robots_txt())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading robots_txt grammar")
    }
}
