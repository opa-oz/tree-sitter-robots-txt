import XCTest
import SwiftTreeSitter
import TreeSitterRobots

final class TreeSitterRobotsTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_robots())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading robots.txt grammar")
    }
}
