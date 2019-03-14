export const spec = [
    {
        "end_line": 355,
        "section": "Tabs",
        "html": "<pre><code>foo\tbaz\t\tbim\n</code></pre>\n",
        "markdown": "\tfoo\tbaz\t\tbim\n",
        "example": 1,
        "start_line": 350
    },
    {
        "end_line": 362,
        "section": "Tabs",
        "html": "<pre><code>foo\tbaz\t\tbim\n</code></pre>\n",
        "markdown": "  \tfoo\tbaz\t\tbim\n",
        "example": 2,
        "start_line": 357
    },
    {
        "end_line": 371,
        "section": "Tabs",
        "html": "<pre><code>a\ta\nὐ\ta\n</code></pre>\n",
        "markdown": "    a\ta\n    ὐ\ta\n",
        "example": 3,
        "start_line": 364
    },
    {
        "end_line": 388,
        "section": "Tabs",
        "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
        "markdown": "  - foo\n\n\tbar\n",
        "example": 4,
        "start_line": 377
    },
    {
        "end_line": 402,
        "section": "Tabs",
        "html": "<ul>\n<li>\n<p>foo</p>\n<pre><code>  bar\n</code></pre>\n</li>\n</ul>\n",
        "markdown": "- foo\n\n\t\tbar\n",
        "example": 5,
        "start_line": 390
    },
    {
        "end_line": 420,
        "section": "Tabs",
        "html": "<blockquote>\n<pre><code>  foo\n</code></pre>\n</blockquote>\n",
        "markdown": ">\t\tfoo\n",
        "example": 6,
        "start_line": 413
    },
    {
        "end_line": 431,
        "section": "Tabs",
        "html": "<ul>\n<li>\n<pre><code>  foo\n</code></pre>\n</li>\n</ul>\n",
        "markdown": "-\t\tfoo\n",
        "example": 7,
        "start_line": 422
    },
    {
        "end_line": 441,
        "section": "Tabs",
        "html": "<pre><code>foo\nbar\n</code></pre>\n",
        "markdown": "    foo\n\tbar\n",
        "example": 8,
        "start_line": 434
    },
    {
        "end_line": 459,
        "section": "Tabs",
        "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
        "markdown": " - foo\n   - bar\n\t - baz\n",
        "example": 9,
        "start_line": 443
    },
    {
        "end_line": 465,
        "section": "Tabs",
        "html": "<h1>Foo</h1>\n",
        "markdown": "#\tFoo\n",
        "example": 10,
        "start_line": 461
    },
    {
        "end_line": 471,
        "section": "Tabs",
        "html": "<hr />\n",
        "markdown": "*\t*\t*\t\n",
        "example": 11,
        "start_line": 467
    },
    {
        "end_line": 502,
        "section": "Precedence",
        "html": "<ul>\n<li>`one</li>\n<li>two`</li>\n</ul>\n",
        "markdown": "- `one\n- two`\n",
        "example": 12,
        "start_line": 494
    },
    {
        "end_line": 541,
        "section": "Thematic breaks",
        "html": "<hr />\n<hr />\n<hr />\n",
        "markdown": "***\n---\n___\n",
        "example": 13,
        "start_line": 533
    },
    {
        "end_line": 550,
        "section": "Thematic breaks",
        "html": "<p>+++</p>\n",
        "markdown": "+++\n",
        "example": 14,
        "start_line": 546
    },
    {
        "end_line": 557,
        "section": "Thematic breaks",
        "html": "<p>===</p>\n",
        "markdown": "===\n",
        "example": 15,
        "start_line": 553
    },
    {
        "end_line": 570,
        "section": "Thematic breaks",
        "html": "<p>--\n**\n__</p>\n",
        "markdown": "--\n**\n__\n",
        "example": 16,
        "start_line": 562
    },
    {
        "end_line": 583,
        "section": "Thematic breaks",
        "html": "<hr />\n<hr />\n<hr />\n",
        "markdown": " ***\n  ***\n   ***\n",
        "example": 17,
        "start_line": 575
    },
    {
        "end_line": 593,
        "section": "Thematic breaks",
        "html": "<pre><code>***\n</code></pre>\n",
        "markdown": "    ***\n",
        "example": 18,
        "start_line": 588
    },
    {
        "end_line": 602,
        "section": "Thematic breaks",
        "html": "<p>Foo\n***</p>\n",
        "markdown": "Foo\n    ***\n",
        "example": 19,
        "start_line": 596
    },
    {
        "end_line": 611,
        "section": "Thematic breaks",
        "html": "<hr />\n",
        "markdown": "_____________________________________\n",
        "example": 20,
        "start_line": 607
    },
    {
        "end_line": 620,
        "section": "Thematic breaks",
        "html": "<hr />\n",
        "markdown": " - - -\n",
        "example": 21,
        "start_line": 616
    },
    {
        "end_line": 627,
        "section": "Thematic breaks",
        "html": "<hr />\n",
        "markdown": " **  * ** * ** * **\n",
        "example": 22,
        "start_line": 623
    },
    {
        "end_line": 634,
        "section": "Thematic breaks",
        "html": "<hr />\n",
        "markdown": "-     -      -      -\n",
        "example": 23,
        "start_line": 630
    },
    {
        "end_line": 643,
        "section": "Thematic breaks",
        "html": "<hr />\n",
        "markdown": "- - - -    \n",
        "example": 24,
        "start_line": 639
    },
    {
        "end_line": 658,
        "section": "Thematic breaks",
        "html": "<p>_ _ _ _ a</p>\n<p>a------</p>\n<p>---a---</p>\n",
        "markdown": "_ _ _ _ a\n\na------\n\n---a---\n",
        "example": 25,
        "start_line": 648
    },
    {
        "end_line": 668,
        "section": "Thematic breaks",
        "html": "<p><em>-</em></p>\n",
        "markdown": " *-*\n",
        "example": 26,
        "start_line": 664
    },
    {
        "end_line": 685,
        "section": "Thematic breaks",
        "html": "<ul>\n<li>foo</li>\n</ul>\n<hr />\n<ul>\n<li>bar</li>\n</ul>\n",
        "markdown": "- foo\n***\n- bar\n",
        "example": 27,
        "start_line": 673
    },
    {
        "end_line": 698,
        "section": "Thematic breaks",
        "html": "<p>Foo</p>\n<hr />\n<p>bar</p>\n",
        "markdown": "Foo\n***\nbar\n",
        "example": 28,
        "start_line": 690
    },
    {
        "end_line": 714,
        "section": "Thematic breaks",
        "html": "<h2>Foo</h2>\n<p>bar</p>\n",
        "markdown": "Foo\n---\nbar\n",
        "example": 29,
        "start_line": 707
    },
    {
        "end_line": 732,
        "section": "Thematic breaks",
        "html": "<ul>\n<li>Foo</li>\n</ul>\n<hr />\n<ul>\n<li>Bar</li>\n</ul>\n",
        "markdown": "* Foo\n* * *\n* Bar\n",
        "example": 30,
        "start_line": 720
    },
    {
        "end_line": 747,
        "section": "Thematic breaks",
        "html": "<ul>\n<li>Foo</li>\n<li>\n<hr />\n</li>\n</ul>\n",
        "markdown": "- Foo\n- * * *\n",
        "example": 31,
        "start_line": 737
    },
    {
        "end_line": 780,
        "section": "ATX headings",
        "html": "<h1>foo</h1>\n<h2>foo</h2>\n<h3>foo</h3>\n<h4>foo</h4>\n<h5>foo</h5>\n<h6>foo</h6>\n",
        "markdown": "# foo\n## foo\n### foo\n#### foo\n##### foo\n###### foo\n",
        "example": 32,
        "start_line": 766
    },
    {
        "end_line": 789,
        "section": "ATX headings",
        "html": "<p>####### foo</p>\n",
        "markdown": "####### foo\n",
        "example": 33,
        "start_line": 785
    },
    {
        "end_line": 807,
        "section": "ATX headings",
        "html": "<p>#5 bolt</p>\n<p>#hashtag</p>\n",
        "markdown": "#5 bolt\n\n#hashtag\n",
        "example": 34,
        "start_line": 800
    },
    {
        "end_line": 816,
        "section": "ATX headings",
        "html": "<p>## foo</p>\n",
        "markdown": "\\## foo\n",
        "example": 35,
        "start_line": 812
    },
    {
        "end_line": 825,
        "section": "ATX headings",
        "html": "<h1>foo <em>bar</em> *baz*</h1>\n",
        "markdown": "# foo *bar* \\*baz\\*\n",
        "example": 36,
        "start_line": 821
    },
    {
        "end_line": 834,
        "section": "ATX headings",
        "html": "<h1>foo</h1>\n",
        "markdown": "#                  foo                     \n",
        "example": 37,
        "start_line": 830
    },
    {
        "end_line": 847,
        "section": "ATX headings",
        "html": "<h3>foo</h3>\n<h2>foo</h2>\n<h1>foo</h1>\n",
        "markdown": " ### foo\n  ## foo\n   # foo\n",
        "example": 38,
        "start_line": 839
    },
    {
        "end_line": 857,
        "section": "ATX headings",
        "html": "<pre><code># foo\n</code></pre>\n",
        "markdown": "    # foo\n",
        "example": 39,
        "start_line": 852
    },
    {
        "end_line": 866,
        "section": "ATX headings",
        "html": "<p>foo\n# bar</p>\n",
        "markdown": "foo\n    # bar\n",
        "example": 40,
        "start_line": 860
    },
    {
        "end_line": 877,
        "section": "ATX headings",
        "html": "<h2>foo</h2>\n<h3>bar</h3>\n",
        "markdown": "## foo ##\n  ###   bar    ###\n",
        "example": 41,
        "start_line": 871
    },
    {
        "end_line": 888,
        "section": "ATX headings",
        "html": "<h1>foo</h1>\n<h5>foo</h5>\n",
        "markdown": "# foo ##################################\n##### foo ##\n",
        "example": 42,
        "start_line": 882
    },
    {
        "end_line": 897,
        "section": "ATX headings",
        "html": "<h3>foo</h3>\n",
        "markdown": "### foo ###     \n",
        "example": 43,
        "start_line": 893
    },
    {
        "end_line": 908,
        "section": "ATX headings",
        "html": "<h3>foo ### b</h3>\n",
        "markdown": "### foo ### b\n",
        "example": 44,
        "start_line": 904
    },
    {
        "end_line": 917,
        "section": "ATX headings",
        "html": "<h1>foo#</h1>\n",
        "markdown": "# foo#\n",
        "example": 45,
        "start_line": 913
    },
    {
        "end_line": 931,
        "section": "ATX headings",
        "html": "<h3>foo ###</h3>\n<h2>foo ###</h2>\n<h1>foo #</h1>\n",
        "markdown": "### foo \\###\n## foo #\\##\n# foo \\#\n",
        "example": 46,
        "start_line": 923
    },
    {
        "end_line": 945,
        "section": "ATX headings",
        "html": "<hr />\n<h2>foo</h2>\n<hr />\n",
        "markdown": "****\n## foo\n****\n",
        "example": 47,
        "start_line": 937
    },
    {
        "end_line": 956,
        "section": "ATX headings",
        "html": "<p>Foo bar</p>\n<h1>baz</h1>\n<p>Bar foo</p>\n",
        "markdown": "Foo bar\n# baz\nBar foo\n",
        "example": 48,
        "start_line": 948
    },
    {
        "end_line": 969,
        "section": "ATX headings",
        "html": "<h2></h2>\n<h1></h1>\n<h3></h3>\n",
        "markdown": "## \n#\n### ###\n",
        "example": 49,
        "start_line": 961
    },
    {
        "end_line": 1013,
        "section": "Setext headings",
        "html": "<h1>Foo <em>bar</em></h1>\n<h2>Foo <em>bar</em></h2>\n",
        "markdown": "Foo *bar*\n=========\n\nFoo *bar*\n---------\n",
        "example": 50,
        "start_line": 1004
    },
    {
        "end_line": 1025,
        "section": "Setext headings",
        "html": "<h1>Foo <em>bar\nbaz</em></h1>\n",
        "markdown": "Foo *bar\nbaz*\n====\n",
        "example": 51,
        "start_line": 1018
    },
    {
        "end_line": 1039,
        "section": "Setext headings",
        "html": "<h2>Foo</h2>\n<h1>Foo</h1>\n",
        "markdown": "Foo\n-------------------------\n\nFoo\n=\n",
        "example": 52,
        "start_line": 1030
    },
    {
        "end_line": 1058,
        "section": "Setext headings",
        "html": "<h2>Foo</h2>\n<h2>Foo</h2>\n<h1>Foo</h1>\n",
        "markdown": "   Foo\n---\n\n  Foo\n-----\n\n  Foo\n  ===\n",
        "example": 53,
        "start_line": 1045
    },
    {
        "end_line": 1076,
        "section": "Setext headings",
        "html": "<pre><code>Foo\n---\n\nFoo\n</code></pre>\n<hr />\n",
        "markdown": "    Foo\n    ---\n\n    Foo\n---\n",
        "example": 54,
        "start_line": 1063
    },
    {
        "end_line": 1087,
        "section": "Setext headings",
        "html": "<h2>Foo</h2>\n",
        "markdown": "Foo\n   ----      \n",
        "example": 55,
        "start_line": 1082
    },
    {
        "end_line": 1098,
        "section": "Setext headings",
        "html": "<p>Foo\n---</p>\n",
        "markdown": "Foo\n    ---\n",
        "example": 56,
        "start_line": 1092
    },
    {
        "end_line": 1114,
        "section": "Setext headings",
        "html": "<p>Foo\n= =</p>\n<p>Foo</p>\n<hr />\n",
        "markdown": "Foo\n= =\n\nFoo\n--- -\n",
        "example": 57,
        "start_line": 1103
    },
    {
        "end_line": 1124,
        "section": "Setext headings",
        "html": "<h2>Foo</h2>\n",
        "markdown": "Foo  \n-----\n",
        "example": 58,
        "start_line": 1119
    },
    {
        "end_line": 1134,
        "section": "Setext headings",
        "html": "<h2>Foo\\</h2>\n",
        "markdown": "Foo\\\n----\n",
        "example": 59,
        "start_line": 1129
    },
    {
        "end_line": 1153,
        "section": "Setext headings",
        "html": "<h2>`Foo</h2>\n<p>`</p>\n<h2>&lt;a title=&quot;a lot</h2>\n<p>of dashes&quot;/&gt;</p>\n",
        "markdown": "`Foo\n----\n`\n\n<a title=\"a lot\n---\nof dashes\"/>\n",
        "example": 60,
        "start_line": 1140
    },
    {
        "end_line": 1167,
        "section": "Setext headings",
        "html": "<blockquote>\n<p>Foo</p>\n</blockquote>\n<hr />\n",
        "markdown": "> Foo\n---\n",
        "example": 61,
        "start_line": 1159
    },
    {
        "end_line": 1180,
        "section": "Setext headings",
        "html": "<blockquote>\n<p>foo\nbar\n===</p>\n</blockquote>\n",
        "markdown": "> foo\nbar\n===\n",
        "example": 62,
        "start_line": 1170
    },
    {
        "end_line": 1191,
        "section": "Setext headings",
        "html": "<ul>\n<li>Foo</li>\n</ul>\n<hr />\n",
        "markdown": "- Foo\n---\n",
        "example": 63,
        "start_line": 1183
    },
    {
        "end_line": 1205,
        "section": "Setext headings",
        "html": "<h2>Foo\nBar</h2>\n",
        "markdown": "Foo\nBar\n---\n",
        "example": 64,
        "start_line": 1198
    },
    {
        "end_line": 1223,
        "section": "Setext headings",
        "html": "<hr />\n<h2>Foo</h2>\n<h2>Bar</h2>\n<p>Baz</p>\n",
        "markdown": "---\nFoo\n---\nBar\n---\nBaz\n",
        "example": 65,
        "start_line": 1211
    },
    {
        "end_line": 1233,
        "section": "Setext headings",
        "html": "<p>====</p>\n",
        "markdown": "\n====\n",
        "example": 66,
        "start_line": 1228
    },
    {
        "end_line": 1246,
        "section": "Setext headings",
        "html": "<hr />\n<hr />\n",
        "markdown": "---\n---\n",
        "example": 67,
        "start_line": 1240
    },
    {
        "end_line": 1257,
        "section": "Setext headings",
        "html": "<ul>\n<li>foo</li>\n</ul>\n<hr />\n",
        "markdown": "- foo\n-----\n",
        "example": 68,
        "start_line": 1249
    },
    {
        "end_line": 1267,
        "section": "Setext headings",
        "html": "<pre><code>foo\n</code></pre>\n<hr />\n",
        "markdown": "    foo\n---\n",
        "example": 69,
        "start_line": 1260
    },
    {
        "end_line": 1278,
        "section": "Setext headings",
        "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n",
        "markdown": "> foo\n-----\n",
        "example": 70,
        "start_line": 1270
    },
    {
        "end_line": 1289,
        "section": "Setext headings",
        "html": "<h2>&gt; foo</h2>\n",
        "markdown": "\\> foo\n------\n",
        "example": 71,
        "start_line": 1284
    },
    {
        "end_line": 1325,
        "section": "Setext headings",
        "html": "<p>Foo</p>\n<h2>bar</h2>\n<p>baz</p>\n",
        "markdown": "Foo\n\nbar\n---\nbaz\n",
        "example": 72,
        "start_line": 1315
    },
    {
        "end_line": 1343,
        "section": "Setext headings",
        "html": "<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n",
        "markdown": "Foo\nbar\n\n---\n\nbaz\n",
        "example": 73,
        "start_line": 1331
    },
    {
        "end_line": 1359,
        "section": "Setext headings",
        "html": "<p>Foo\nbar</p>\n<hr />\n<p>baz</p>\n",
        "markdown": "Foo\nbar\n* * *\nbaz\n",
        "example": 74,
        "start_line": 1349
    },
    {
        "end_line": 1374,
        "section": "Setext headings",
        "html": "<p>Foo\nbar\n---\nbaz</p>\n",
        "markdown": "Foo\nbar\n\\---\nbaz\n",
        "example": 75,
        "start_line": 1364
    },
    {
        "end_line": 1399,
        "section": "Indented code blocks",
        "html": "<pre><code>a simple\n  indented code block\n</code></pre>\n",
        "markdown": "    a simple\n      indented code block\n",
        "example": 76,
        "start_line": 1392
    },
    {
        "end_line": 1417,
        "section": "Indented code blocks",
        "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
        "markdown": "  - foo\n\n    bar\n",
        "example": 77,
        "start_line": 1406
    },
    {
        "end_line": 1433,
        "section": "Indented code blocks",
        "html": "<ol>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n",
        "markdown": "1.  foo\n\n    - bar\n",
        "example": 78,
        "start_line": 1420
    },
    {
        "end_line": 1451,
        "section": "Indented code blocks",
        "html": "<pre><code>&lt;a/&gt;\n*hi*\n\n- one\n</code></pre>\n",
        "markdown": "    <a/>\n    *hi*\n\n    - one\n",
        "example": 79,
        "start_line": 1440
    },
    {
        "end_line": 1473,
        "section": "Indented code blocks",
        "html": "<pre><code>chunk1\n\nchunk2\n\n\n\nchunk3\n</code></pre>\n",
        "markdown": "    chunk1\n\n    chunk2\n  \n \n \n    chunk3\n",
        "example": 80,
        "start_line": 1456
    },
    {
        "end_line": 1488,
        "section": "Indented code blocks",
        "html": "<pre><code>chunk1\n  \n  chunk2\n</code></pre>\n",
        "markdown": "    chunk1\n      \n      chunk2\n",
        "example": 81,
        "start_line": 1479
    },
    {
        "end_line": 1501,
        "section": "Indented code blocks",
        "html": "<p>Foo\nbar</p>\n",
        "markdown": "Foo\n    bar\n\n",
        "example": 82,
        "start_line": 1494
    },
    {
        "end_line": 1515,
        "section": "Indented code blocks",
        "html": "<pre><code>foo\n</code></pre>\n<p>bar</p>\n",
        "markdown": "    foo\nbar\n",
        "example": 83,
        "start_line": 1508
    },
    {
        "end_line": 1536,
        "section": "Indented code blocks",
        "html": "<h1>Heading</h1>\n<pre><code>foo\n</code></pre>\n<h2>Heading</h2>\n<pre><code>foo\n</code></pre>\n<hr />\n",
        "markdown": "# Heading\n    foo\nHeading\n------\n    foo\n----\n",
        "example": 84,
        "start_line": 1521
    },
    {
        "end_line": 1548,
        "section": "Indented code blocks",
        "html": "<pre><code>    foo\nbar\n</code></pre>\n",
        "markdown": "        foo\n    bar\n",
        "example": 85,
        "start_line": 1541
    },
    {
        "end_line": 1563,
        "section": "Indented code blocks",
        "html": "<pre><code>foo\n</code></pre>\n",
        "markdown": "\n    \n    foo\n    \n\n",
        "example": 86,
        "start_line": 1554
    },
    {
        "end_line": 1573,
        "section": "Indented code blocks",
        "html": "<pre><code>foo  \n</code></pre>\n",
        "markdown": "    foo  \n",
        "example": 87,
        "start_line": 1568
    },
    {
        "end_line": 1632,
        "section": "Fenced code blocks",
        "html": "<pre><code>&lt;\n &gt;\n</code></pre>\n",
        "markdown": "```\n<\n >\n```\n",
        "example": 88,
        "start_line": 1623
    },
    {
        "end_line": 1646,
        "section": "Fenced code blocks",
        "html": "<pre><code>&lt;\n &gt;\n</code></pre>\n",
        "markdown": "~~~\n<\n >\n~~~\n",
        "example": 89,
        "start_line": 1637
    },
    {
        "end_line": 1656,
        "section": "Fenced code blocks",
        "html": "<p><code>foo</code></p>\n",
        "markdown": "``\nfoo\n``\n",
        "example": 90,
        "start_line": 1650
    },
    {
        "end_line": 1670,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\n~~~\n</code></pre>\n",
        "markdown": "```\naaa\n~~~\n```\n",
        "example": 91,
        "start_line": 1661
    },
    {
        "end_line": 1682,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\n```\n</code></pre>\n",
        "markdown": "~~~\naaa\n```\n~~~\n",
        "example": 92,
        "start_line": 1673
    },
    {
        "end_line": 1696,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\n```\n</code></pre>\n",
        "markdown": "````\naaa\n```\n``````\n",
        "example": 93,
        "start_line": 1687
    },
    {
        "end_line": 1708,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\n~~~\n</code></pre>\n",
        "markdown": "~~~~\naaa\n~~~\n~~~~\n",
        "example": 94,
        "start_line": 1699
    },
    {
        "end_line": 1718,
        "section": "Fenced code blocks",
        "html": "<pre><code></code></pre>\n",
        "markdown": "```\n",
        "example": 95,
        "start_line": 1714
    },
    {
        "end_line": 1731,
        "section": "Fenced code blocks",
        "html": "<pre><code>\n```\naaa\n</code></pre>\n",
        "markdown": "`````\n\n```\naaa\n",
        "example": 96,
        "start_line": 1721
    },
    {
        "end_line": 1745,
        "section": "Fenced code blocks",
        "html": "<blockquote>\n<pre><code>aaa\n</code></pre>\n</blockquote>\n<p>bbb</p>\n",
        "markdown": "> ```\n> aaa\n\nbbb\n",
        "example": 97,
        "start_line": 1734
    },
    {
        "end_line": 1759,
        "section": "Fenced code blocks",
        "html": "<pre><code>\n  \n</code></pre>\n",
        "markdown": "```\n\n  \n```\n",
        "example": 98,
        "start_line": 1750
    },
    {
        "end_line": 1769,
        "section": "Fenced code blocks",
        "html": "<pre><code></code></pre>\n",
        "markdown": "```\n```\n",
        "example": 99,
        "start_line": 1764
    },
    {
        "end_line": 1785,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\naaa\n</code></pre>\n",
        "markdown": " ```\n aaa\naaa\n```\n",
        "example": 100,
        "start_line": 1776
    },
    {
        "end_line": 1799,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\naaa\naaa\n</code></pre>\n",
        "markdown": "  ```\naaa\n  aaa\naaa\n  ```\n",
        "example": 101,
        "start_line": 1788
    },
    {
        "end_line": 1813,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\n aaa\naaa\n</code></pre>\n",
        "markdown": "   ```\n   aaa\n    aaa\n  aaa\n   ```\n",
        "example": 102,
        "start_line": 1802
    },
    {
        "end_line": 1827,
        "section": "Fenced code blocks",
        "html": "<pre><code>```\naaa\n```\n</code></pre>\n",
        "markdown": "    ```\n    aaa\n    ```\n",
        "example": 103,
        "start_line": 1818
    },
    {
        "end_line": 1840,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\n</code></pre>\n",
        "markdown": "```\naaa\n  ```\n",
        "example": 104,
        "start_line": 1833
    },
    {
        "end_line": 1850,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\n</code></pre>\n",
        "markdown": "   ```\naaa\n  ```\n",
        "example": 105,
        "start_line": 1843
    },
    {
        "end_line": 1863,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\n    ```\n</code></pre>\n",
        "markdown": "```\naaa\n    ```\n",
        "example": 106,
        "start_line": 1855
    },
    {
        "end_line": 1875,
        "section": "Fenced code blocks",
        "html": "<p><code></code>\naaa</p>\n",
        "markdown": "``` ```\naaa\n",
        "example": 107,
        "start_line": 1869
    },
    {
        "end_line": 1886,
        "section": "Fenced code blocks",
        "html": "<pre><code>aaa\n~~~ ~~\n</code></pre>\n",
        "markdown": "~~~~~~\naaa\n~~~ ~~\n",
        "example": 108,
        "start_line": 1878
    },
    {
        "end_line": 1903,
        "section": "Fenced code blocks",
        "html": "<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n",
        "markdown": "foo\n```\nbar\n```\nbaz\n",
        "example": 109,
        "start_line": 1892
    },
    {
        "end_line": 1921,
        "section": "Fenced code blocks",
        "html": "<h2>foo</h2>\n<pre><code>bar\n</code></pre>\n<h1>baz</h1>\n",
        "markdown": "foo\n---\n~~~\nbar\n~~~\n# baz\n",
        "example": 110,
        "start_line": 1909
    },
    {
        "end_line": 1940,
        "section": "Fenced code blocks",
        "html": "<pre><code class=\"language-ruby\">def foo(x)\n  return 3\nend\n</code></pre>\n",
        "markdown": "```ruby\ndef foo(x)\n  return 3\nend\n```\n",
        "example": 111,
        "start_line": 1929
    },
    {
        "end_line": 1954,
        "section": "Fenced code blocks",
        "html": "<pre><code class=\"language-ruby\">def foo(x)\n  return 3\nend\n</code></pre>\n",
        "markdown": "~~~~    ruby startline=3 $%@#$\ndef foo(x)\n  return 3\nend\n~~~~~~~\n",
        "example": 112,
        "start_line": 1943
    },
    {
        "end_line": 1962,
        "section": "Fenced code blocks",
        "html": "<pre><code class=\"language-;\"></code></pre>\n",
        "markdown": "````;\n````\n",
        "example": 113,
        "start_line": 1957
    },
    {
        "end_line": 1973,
        "section": "Fenced code blocks",
        "html": "<p><code>aa</code>\nfoo</p>\n",
        "markdown": "``` aa ```\nfoo\n",
        "example": 114,
        "start_line": 1967
    },
    {
        "end_line": 1985,
        "section": "Fenced code blocks",
        "html": "<pre><code>``` aaa\n</code></pre>\n",
        "markdown": "```\n``` aaa\n```\n",
        "example": 115,
        "start_line": 1978
    },
    {
        "end_line": 2070,
        "section": "HTML blocks",
        "html": "<table><tr><td>\n<pre>\n**Hello**,\n<p><em>world</em>.\n</pre></p>\n</td></tr></table>\n",
        "markdown": "<table><tr><td>\n<pre>\n**Hello**,\n\n_world_.\n</pre>\n</td></tr></table>\n",
        "example": 116,
        "start_line": 2055
    },
    {
        "end_line": 2103,
        "section": "HTML blocks",
        "html": "<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n<p>okay.</p>\n",
        "markdown": "<table>\n  <tr>\n    <td>\n           hi\n    </td>\n  </tr>\n</table>\n\nokay.\n",
        "example": 117,
        "start_line": 2084
    },
    {
        "end_line": 2114,
        "section": "HTML blocks",
        "html": " <div>\n  *hello*\n         <foo><a>\n",
        "markdown": " <div>\n  *hello*\n         <foo><a>\n",
        "example": 118,
        "start_line": 2106
    },
    {
        "end_line": 2125,
        "section": "HTML blocks",
        "html": "</div>\n*foo*\n",
        "markdown": "</div>\n*foo*\n",
        "example": 119,
        "start_line": 2119
    },
    {
        "end_line": 2140,
        "section": "HTML blocks",
        "html": "<DIV CLASS=\"foo\">\n<p><em>Markdown</em></p>\n</DIV>\n",
        "markdown": "<DIV CLASS=\"foo\">\n\n*Markdown*\n\n</DIV>\n",
        "example": 120,
        "start_line": 2130
    },
    {
        "end_line": 2154,
        "section": "HTML blocks",
        "html": "<div id=\"foo\"\n  class=\"bar\">\n</div>\n",
        "markdown": "<div id=\"foo\"\n  class=\"bar\">\n</div>\n",
        "example": 121,
        "start_line": 2146
    },
    {
        "end_line": 2165,
        "section": "HTML blocks",
        "html": "<div id=\"foo\" class=\"bar\n  baz\">\n</div>\n",
        "markdown": "<div id=\"foo\" class=\"bar\n  baz\">\n</div>\n",
        "example": 122,
        "start_line": 2157
    },
    {
        "end_line": 2178,
        "section": "HTML blocks",
        "html": "<div>\n*foo*\n<p><em>bar</em></p>\n",
        "markdown": "<div>\n*foo*\n\n*bar*\n",
        "example": 123,
        "start_line": 2169
    },
    {
        "end_line": 2191,
        "section": "HTML blocks",
        "html": "<div id=\"foo\"\n*hi*\n",
        "markdown": "<div id=\"foo\"\n*hi*\n",
        "example": 124,
        "start_line": 2185
    },
    {
        "end_line": 2200,
        "section": "HTML blocks",
        "html": "<div class\nfoo\n",
        "markdown": "<div class\nfoo\n",
        "example": 125,
        "start_line": 2194
    },
    {
        "end_line": 2212,
        "section": "HTML blocks",
        "html": "<div *???-&&&-<---\n*foo*\n",
        "markdown": "<div *???-&&&-<---\n*foo*\n",
        "example": 126,
        "start_line": 2206
    },
    {
        "end_line": 2222,
        "section": "HTML blocks",
        "html": "<div><a href=\"bar\">*foo*</a></div>\n",
        "markdown": "<div><a href=\"bar\">*foo*</a></div>\n",
        "example": 127,
        "start_line": 2218
    },
    {
        "end_line": 2233,
        "section": "HTML blocks",
        "html": "<table><tr><td>\nfoo\n</td></tr></table>\n",
        "markdown": "<table><tr><td>\nfoo\n</td></tr></table>\n",
        "example": 128,
        "start_line": 2225
    },
    {
        "end_line": 2252,
        "section": "HTML blocks",
        "html": "<div></div>\n``` c\nint x = 33;\n```\n",
        "markdown": "<div></div>\n``` c\nint x = 33;\n```\n",
        "example": 129,
        "start_line": 2242
    },
    {
        "end_line": 2267,
        "section": "HTML blocks",
        "html": "<a href=\"foo\">\n*bar*\n</a>\n",
        "markdown": "<a href=\"foo\">\n*bar*\n</a>\n",
        "example": 130,
        "start_line": 2259
    },
    {
        "end_line": 2280,
        "section": "HTML blocks",
        "html": "<Warning>\n*bar*\n</Warning>\n",
        "markdown": "<Warning>\n*bar*\n</Warning>\n",
        "example": 131,
        "start_line": 2272
    },
    {
        "end_line": 2291,
        "section": "HTML blocks",
        "html": "<i class=\"foo\">\n*bar*\n</i>\n",
        "markdown": "<i class=\"foo\">\n*bar*\n</i>\n",
        "example": 132,
        "start_line": 2283
    },
    {
        "end_line": 2300,
        "section": "HTML blocks",
        "html": "</ins>\n*bar*\n",
        "markdown": "</ins>\n*bar*\n",
        "example": 133,
        "start_line": 2294
    },
    {
        "end_line": 2317,
        "section": "HTML blocks",
        "html": "<del>\n*foo*\n</del>\n",
        "markdown": "<del>\n*foo*\n</del>\n",
        "example": 134,
        "start_line": 2309
    },
    {
        "end_line": 2334,
        "section": "HTML blocks",
        "html": "<del>\n<p><em>foo</em></p>\n</del>\n",
        "markdown": "<del>\n\n*foo*\n\n</del>\n",
        "example": 135,
        "start_line": 2324
    },
    {
        "end_line": 2346,
        "section": "HTML blocks",
        "html": "<p><del><em>foo</em></del></p>\n",
        "markdown": "<del>*foo*</del>\n",
        "example": 136,
        "start_line": 2342
    },
    {
        "end_line": 2374,
        "section": "HTML blocks",
        "html": "<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\n<p>okay</p>\n",
        "markdown": "<pre language=\"haskell\"><code>\nimport Text.HTML.TagSoup\n\nmain :: IO ()\nmain = print $ parseTags tags\n</code></pre>\nokay\n",
        "example": 137,
        "start_line": 2358
    },
    {
        "end_line": 2393,
        "section": "HTML blocks",
        "html": "<script type=\"text/javascript\">\n// JavaScript example\n\ndocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\n<p>okay</p>\n",
        "markdown": "<script type=\"text/javascript\">\n// JavaScript example\n\ndocument.getElementById(\"demo\").innerHTML = \"Hello JavaScript!\";\n</script>\nokay\n",
        "example": 138,
        "start_line": 2379
    },
    {
        "end_line": 2414,
        "section": "HTML blocks",
        "html": "<style\n  type=\"text/css\">\nh1 {color:red;}\n\np {color:blue;}\n</style>\n<p>okay</p>\n",
        "markdown": "<style\n  type=\"text/css\">\nh1 {color:red;}\n\np {color:blue;}\n</style>\nokay\n",
        "example": 139,
        "start_line": 2398
    },
    {
        "end_line": 2431,
        "section": "HTML blocks",
        "html": "<style\n  type=\"text/css\">\n\nfoo\n",
        "markdown": "<style\n  type=\"text/css\">\n\nfoo\n",
        "example": 140,
        "start_line": 2421
    },
    {
        "end_line": 2445,
        "section": "HTML blocks",
        "html": "<blockquote>\n<div>\nfoo\n</blockquote>\n<p>bar</p>\n",
        "markdown": "> <div>\n> foo\n\nbar\n",
        "example": 141,
        "start_line": 2434
    },
    {
        "end_line": 2458,
        "section": "HTML blocks",
        "html": "<ul>\n<li>\n<div>\n</li>\n<li>foo</li>\n</ul>\n",
        "markdown": "- <div>\n- foo\n",
        "example": 142,
        "start_line": 2448
    },
    {
        "end_line": 2469,
        "section": "HTML blocks",
        "html": "<style>p{color:red;}</style>\n<p><em>foo</em></p>\n",
        "markdown": "<style>p{color:red;}</style>\n*foo*\n",
        "example": 143,
        "start_line": 2463
    },
    {
        "end_line": 2478,
        "section": "HTML blocks",
        "html": "<!-- foo -->*bar*\n<p><em>baz</em></p>\n",
        "markdown": "<!-- foo -->*bar*\n*baz*\n",
        "example": 144,
        "start_line": 2472
    },
    {
        "end_line": 2492,
        "section": "HTML blocks",
        "html": "<script>\nfoo\n</script>1. *bar*\n",
        "markdown": "<script>\nfoo\n</script>1. *bar*\n",
        "example": 145,
        "start_line": 2484
    },
    {
        "end_line": 2509,
        "section": "HTML blocks",
        "html": "<!-- Foo\n\nbar\n   baz -->\n<p>okay</p>\n",
        "markdown": "<!-- Foo\n\nbar\n   baz -->\nokay\n",
        "example": 146,
        "start_line": 2497
    },
    {
        "end_line": 2529,
        "section": "HTML blocks",
        "html": "<?php\n\n  echo '>';\n\n?>\n<p>okay</p>\n",
        "markdown": "<?php\n\n  echo '>';\n\n?>\nokay\n",
        "example": 147,
        "start_line": 2515
    },
    {
        "end_line": 2538,
        "section": "HTML blocks",
        "html": "<!DOCTYPE html>\n",
        "markdown": "<!DOCTYPE html>\n",
        "example": 148,
        "start_line": 2534
    },
    {
        "end_line": 2571,
        "section": "HTML blocks",
        "html": "<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\n<p>okay</p>\n",
        "markdown": "<![CDATA[\nfunction matchwo(a,b)\n{\n  if (a < b && a < 0) then {\n    return 1;\n\n  } else {\n\n    return 0;\n  }\n}\n]]>\nokay\n",
        "example": 149,
        "start_line": 2543
    },
    {
        "end_line": 2584,
        "section": "HTML blocks",
        "html": "  <!-- foo -->\n<pre><code>&lt;!-- foo --&gt;\n</code></pre>\n",
        "markdown": "  <!-- foo -->\n\n    <!-- foo -->\n",
        "example": 150,
        "start_line": 2576
    },
    {
        "end_line": 2595,
        "section": "HTML blocks",
        "html": "  <div>\n<pre><code>&lt;div&gt;\n</code></pre>\n",
        "markdown": "  <div>\n\n    <div>\n",
        "example": 151,
        "start_line": 2587
    },
    {
        "end_line": 2611,
        "section": "HTML blocks",
        "html": "<p>Foo</p>\n<div>\nbar\n</div>\n",
        "markdown": "Foo\n<div>\nbar\n</div>\n",
        "example": 152,
        "start_line": 2601
    },
    {
        "end_line": 2627,
        "section": "HTML blocks",
        "html": "<div>\nbar\n</div>\n*foo*\n",
        "markdown": "<div>\nbar\n</div>\n*foo*\n",
        "example": 153,
        "start_line": 2617
    },
    {
        "end_line": 2640,
        "section": "HTML blocks",
        "html": "<p>Foo\n<a href=\"bar\">\nbaz</p>\n",
        "markdown": "Foo\n<a href=\"bar\">\nbaz\n",
        "example": 154,
        "start_line": 2632
    },
    {
        "end_line": 2683,
        "section": "HTML blocks",
        "html": "<div>\n<p><em>Emphasized</em> text.</p>\n</div>\n",
        "markdown": "<div>\n\n*Emphasized* text.\n\n</div>\n",
        "example": 155,
        "start_line": 2673
    },
    {
        "end_line": 2694,
        "section": "HTML blocks",
        "html": "<div>\n*Emphasized* text.\n</div>\n",
        "markdown": "<div>\n*Emphasized* text.\n</div>\n",
        "example": 156,
        "start_line": 2686
    },
    {
        "end_line": 2728,
        "section": "HTML blocks",
        "html": "<table>\n<tr>\n<td>\nHi\n</td>\n</tr>\n</table>\n",
        "markdown": "<table>\n\n<tr>\n\n<td>\nHi\n</td>\n\n</tr>\n\n</table>\n",
        "example": 157,
        "start_line": 2708
    },
    {
        "end_line": 2756,
        "section": "HTML blocks",
        "html": "<table>\n  <tr>\n<pre><code>&lt;td&gt;\n  Hi\n&lt;/td&gt;\n</code></pre>\n  </tr>\n</table>\n",
        "markdown": "<table>\n\n  <tr>\n\n    <td>\n      Hi\n    </td>\n\n  </tr>\n\n</table>\n",
        "example": 158,
        "start_line": 2735
    },
    {
        "end_line": 2789,
        "section": "Link reference definitions",
        "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
        "markdown": "[foo]: /url \"title\"\n\n[foo]\n",
        "example": 159,
        "start_line": 2783
    },
    {
        "end_line": 2800,
        "section": "Link reference definitions",
        "html": "<p><a href=\"/url\" title=\"the title\">foo</a></p>\n",
        "markdown": "   [foo]: \n      /url  \n           'the title'  \n\n[foo]\n",
        "example": 160,
        "start_line": 2792
    },
    {
        "end_line": 2809,
        "section": "Link reference definitions",
        "html": "<p><a href=\"my_(url)\" title=\"title (with parens)\">Foo*bar]</a></p>\n",
        "markdown": "[Foo*bar\\]]:my_(url) 'title (with parens)'\n\n[Foo*bar\\]]\n",
        "example": 161,
        "start_line": 2803
    },
    {
        "end_line": 2820,
        "section": "Link reference definitions",
        "html": "<p><a href=\"my%20url\" title=\"title\">Foo bar</a></p>\n",
        "markdown": "[Foo bar]:\n<my%20url>\n'title'\n\n[Foo bar]\n",
        "example": 162,
        "start_line": 2812
    },
    {
        "end_line": 2839,
        "section": "Link reference definitions",
        "html": "<p><a href=\"/url\" title=\"\ntitle\nline1\nline2\n\">foo</a></p>\n",
        "markdown": "[foo]: /url '\ntitle\nline1\nline2\n'\n\n[foo]\n",
        "example": 163,
        "start_line": 2825
    },
    {
        "end_line": 2854,
        "section": "Link reference definitions",
        "html": "<p>[foo]: /url 'title</p>\n<p>with blank line'</p>\n<p>[foo]</p>\n",
        "markdown": "[foo]: /url 'title\n\nwith blank line'\n\n[foo]\n",
        "example": 164,
        "start_line": 2844
    },
    {
        "end_line": 2866,
        "section": "Link reference definitions",
        "html": "<p><a href=\"/url\">foo</a></p>\n",
        "markdown": "[foo]:\n/url\n\n[foo]\n",
        "example": 165,
        "start_line": 2859
    },
    {
        "end_line": 2878,
        "section": "Link reference definitions",
        "html": "<p>[foo]:</p>\n<p>[foo]</p>\n",
        "markdown": "[foo]:\n\n[foo]\n",
        "example": 166,
        "start_line": 2871
    },
    {
        "end_line": 2890,
        "section": "Link reference definitions",
        "html": "<p><a href=\"/url%5Cbar*baz\" title=\"foo&quot;bar\\baz\">foo</a></p>\n",
        "markdown": "[foo]: /url\\bar\\*baz \"foo\\\"bar\\baz\"\n\n[foo]\n",
        "example": 167,
        "start_line": 2884
    },
    {
        "end_line": 2901,
        "section": "Link reference definitions",
        "html": "<p><a href=\"url\">foo</a></p>\n",
        "markdown": "[foo]\n\n[foo]: url\n",
        "example": 168,
        "start_line": 2895
    },
    {
        "end_line": 2914,
        "section": "Link reference definitions",
        "html": "<p><a href=\"first\">foo</a></p>\n",
        "markdown": "[foo]\n\n[foo]: first\n[foo]: second\n",
        "example": 169,
        "start_line": 2907
    },
    {
        "end_line": 2926,
        "section": "Link reference definitions",
        "html": "<p><a href=\"/url\">Foo</a></p>\n",
        "markdown": "[FOO]: /url\n\n[Foo]\n",
        "example": 170,
        "start_line": 2920
    },
    {
        "end_line": 2935,
        "section": "Link reference definitions",
        "html": "<p><a href=\"/%CF%86%CE%BF%CF%85\">αγω</a></p>\n",
        "markdown": "[ΑΓΩ]: /φου\n\n[αγω]\n",
        "example": 171,
        "start_line": 2929
    },
    {
        "end_line": 2944,
        "section": "Link reference definitions",
        "html": "",
        "markdown": "[foo]: /url\n",
        "example": 172,
        "start_line": 2941
    },
    {
        "end_line": 2956,
        "section": "Link reference definitions",
        "html": "<p>bar</p>\n",
        "markdown": "[\nfoo\n]: /url\nbar\n",
        "example": 173,
        "start_line": 2949
    },
    {
        "end_line": 2966,
        "section": "Link reference definitions",
        "html": "<p>[foo]: /url &quot;title&quot; ok</p>\n",
        "markdown": "[foo]: /url \"title\" ok\n",
        "example": 174,
        "start_line": 2962
    },
    {
        "end_line": 2976,
        "section": "Link reference definitions",
        "html": "<p>&quot;title&quot; ok</p>\n",
        "markdown": "[foo]: /url\n\"title\" ok\n",
        "example": 175,
        "start_line": 2971
    },
    {
        "end_line": 2990,
        "section": "Link reference definitions",
        "html": "<pre><code>[foo]: /url &quot;title&quot;\n</code></pre>\n<p>[foo]</p>\n",
        "markdown": "    [foo]: /url \"title\"\n\n[foo]\n",
        "example": 176,
        "start_line": 2982
    },
    {
        "end_line": 3006,
        "section": "Link reference definitions",
        "html": "<pre><code>[foo]: /url\n</code></pre>\n<p>[foo]</p>\n",
        "markdown": "```\n[foo]: /url\n```\n\n[foo]\n",
        "example": 177,
        "start_line": 2996
    },
    {
        "end_line": 3020,
        "section": "Link reference definitions",
        "html": "<p>Foo\n[bar]: /baz</p>\n<p>[bar]</p>\n",
        "markdown": "Foo\n[bar]: /baz\n\n[bar]\n",
        "example": 178,
        "start_line": 3011
    },
    {
        "end_line": 3035,
        "section": "Link reference definitions",
        "html": "<h1><a href=\"/url\">Foo</a></h1>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
        "markdown": "# [Foo]\n[foo]: /url\n> bar\n",
        "example": 179,
        "start_line": 3026
    },
    {
        "end_line": 3054,
        "section": "Link reference definitions",
        "html": "<p><a href=\"/foo-url\" title=\"foo\">foo</a>,\n<a href=\"/bar-url\" title=\"bar\">bar</a>,\n<a href=\"/baz-url\">baz</a></p>\n",
        "markdown": "[foo]: /foo-url \"foo\"\n[bar]: /bar-url\n  \"bar\"\n[baz]: /baz-url\n\n[foo],\n[bar],\n[baz]\n",
        "example": 180,
        "start_line": 3041
    },
    {
        "end_line": 3070,
        "section": "Link reference definitions",
        "html": "<p><a href=\"/url\">foo</a></p>\n<blockquote>\n</blockquote>\n",
        "markdown": "[foo]\n\n> [foo]: /url\n",
        "example": 181,
        "start_line": 3062
    },
    {
        "end_line": 3092,
        "section": "Paragraphs",
        "html": "<p>aaa</p>\n<p>bbb</p>\n",
        "markdown": "aaa\n\nbbb\n",
        "example": 182,
        "start_line": 3085
    },
    {
        "end_line": 3108,
        "section": "Paragraphs",
        "html": "<p>aaa\nbbb</p>\n<p>ccc\nddd</p>\n",
        "markdown": "aaa\nbbb\n\nccc\nddd\n",
        "example": 183,
        "start_line": 3097
    },
    {
        "end_line": 3121,
        "section": "Paragraphs",
        "html": "<p>aaa</p>\n<p>bbb</p>\n",
        "markdown": "aaa\n\n\nbbb\n",
        "example": 184,
        "start_line": 3113
    },
    {
        "end_line": 3132,
        "section": "Paragraphs",
        "html": "<p>aaa\nbbb</p>\n",
        "markdown": "  aaa\n bbb\n",
        "example": 185,
        "start_line": 3126
    },
    {
        "end_line": 3146,
        "section": "Paragraphs",
        "html": "<p>aaa\nbbb\nccc</p>\n",
        "markdown": "aaa\n             bbb\n                                       ccc\n",
        "example": 186,
        "start_line": 3138
    },
    {
        "end_line": 3158,
        "section": "Paragraphs",
        "html": "<p>aaa\nbbb</p>\n",
        "markdown": "   aaa\nbbb\n",
        "example": 187,
        "start_line": 3152
    },
    {
        "end_line": 3168,
        "section": "Paragraphs",
        "html": "<pre><code>aaa\n</code></pre>\n<p>bbb</p>\n",
        "markdown": "    aaa\nbbb\n",
        "example": 188,
        "start_line": 3161
    },
    {
        "end_line": 3181,
        "section": "Paragraphs",
        "html": "<p>aaa<br />\nbbb</p>\n",
        "markdown": "aaa     \nbbb     \n",
        "example": 189,
        "start_line": 3175
    },
    {
        "end_line": 3204,
        "section": "Blank lines",
        "html": "<p>aaa</p>\n<h1>aaa</h1>\n",
        "markdown": "  \n\naaa\n  \n\n# aaa\n\n  \n",
        "example": 190,
        "start_line": 3192
    },
    {
        "end_line": 3268,
        "section": "Block quotes",
        "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
        "markdown": "> # Foo\n> bar\n> baz\n",
        "example": 191,
        "start_line": 3258
    },
    {
        "end_line": 3283,
        "section": "Block quotes",
        "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
        "markdown": "># Foo\n>bar\n> baz\n",
        "example": 192,
        "start_line": 3273
    },
    {
        "end_line": 3298,
        "section": "Block quotes",
        "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
        "markdown": "   > # Foo\n   > bar\n > baz\n",
        "example": 193,
        "start_line": 3288
    },
    {
        "end_line": 3312,
        "section": "Block quotes",
        "html": "<pre><code>&gt; # Foo\n&gt; bar\n&gt; baz\n</code></pre>\n",
        "markdown": "    > # Foo\n    > bar\n    > baz\n",
        "example": 194,
        "start_line": 3303
    },
    {
        "end_line": 3328,
        "section": "Block quotes",
        "html": "<blockquote>\n<h1>Foo</h1>\n<p>bar\nbaz</p>\n</blockquote>\n",
        "markdown": "> # Foo\n> bar\nbaz\n",
        "example": 195,
        "start_line": 3318
    },
    {
        "end_line": 3344,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>bar\nbaz\nfoo</p>\n</blockquote>\n",
        "markdown": "> bar\nbaz\n> foo\n",
        "example": 196,
        "start_line": 3334
    },
    {
        "end_line": 3366,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<hr />\n",
        "markdown": "> foo\n---\n",
        "example": 197,
        "start_line": 3358
    },
    {
        "end_line": 3390,
        "section": "Block quotes",
        "html": "<blockquote>\n<ul>\n<li>foo</li>\n</ul>\n</blockquote>\n<ul>\n<li>bar</li>\n</ul>\n",
        "markdown": "> - foo\n- bar\n",
        "example": 198,
        "start_line": 3378
    },
    {
        "end_line": 3406,
        "section": "Block quotes",
        "html": "<blockquote>\n<pre><code>foo\n</code></pre>\n</blockquote>\n<pre><code>bar\n</code></pre>\n",
        "markdown": ">     foo\n    bar\n",
        "example": 199,
        "start_line": 3396
    },
    {
        "end_line": 3419,
        "section": "Block quotes",
        "html": "<blockquote>\n<pre><code></code></pre>\n</blockquote>\n<p>foo</p>\n<pre><code></code></pre>\n",
        "markdown": "> ```\nfoo\n```\n",
        "example": 200,
        "start_line": 3409
    },
    {
        "end_line": 3433,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>foo\n- bar</p>\n</blockquote>\n",
        "markdown": "> foo\n    - bar\n",
        "example": 201,
        "start_line": 3425
    },
    {
        "end_line": 3454,
        "section": "Block quotes",
        "html": "<blockquote>\n</blockquote>\n",
        "markdown": ">\n",
        "example": 202,
        "start_line": 3449
    },
    {
        "end_line": 3464,
        "section": "Block quotes",
        "html": "<blockquote>\n</blockquote>\n",
        "markdown": ">\n>  \n> \n",
        "example": 203,
        "start_line": 3457
    },
    {
        "end_line": 3477,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n",
        "markdown": ">\n> foo\n>  \n",
        "example": 204,
        "start_line": 3469
    },
    {
        "end_line": 3493,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>foo</p>\n</blockquote>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
        "markdown": "> foo\n\n> bar\n",
        "example": 205,
        "start_line": 3482
    },
    {
        "end_line": 3512,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n",
        "markdown": "> foo\n> bar\n",
        "example": 206,
        "start_line": 3504
    },
    {
        "end_line": 3526,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>foo</p>\n<p>bar</p>\n</blockquote>\n",
        "markdown": "> foo\n>\n> bar\n",
        "example": 207,
        "start_line": 3517
    },
    {
        "end_line": 3539,
        "section": "Block quotes",
        "html": "<p>foo</p>\n<blockquote>\n<p>bar</p>\n</blockquote>\n",
        "markdown": "foo\n> bar\n",
        "example": 208,
        "start_line": 3531
    },
    {
        "end_line": 3557,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>aaa</p>\n</blockquote>\n<hr />\n<blockquote>\n<p>bbb</p>\n</blockquote>\n",
        "markdown": "> aaa\n***\n> bbb\n",
        "example": 209,
        "start_line": 3545
    },
    {
        "end_line": 3571,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>bar\nbaz</p>\n</blockquote>\n",
        "markdown": "> bar\nbaz\n",
        "example": 210,
        "start_line": 3563
    },
    {
        "end_line": 3583,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n",
        "markdown": "> bar\n\nbaz\n",
        "example": 211,
        "start_line": 3574
    },
    {
        "end_line": 3595,
        "section": "Block quotes",
        "html": "<blockquote>\n<p>bar</p>\n</blockquote>\n<p>baz</p>\n",
        "markdown": "> bar\n>\nbaz\n",
        "example": 212,
        "start_line": 3586
    },
    {
        "end_line": 3614,
        "section": "Block quotes",
        "html": "<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar</p>\n</blockquote>\n</blockquote>\n</blockquote>\n",
        "markdown": "> > > foo\nbar\n",
        "example": 213,
        "start_line": 3602
    },
    {
        "end_line": 3631,
        "section": "Block quotes",
        "html": "<blockquote>\n<blockquote>\n<blockquote>\n<p>foo\nbar\nbaz</p>\n</blockquote>\n</blockquote>\n</blockquote>\n",
        "markdown": ">>> foo\n> bar\n>>baz\n",
        "example": 214,
        "start_line": 3617
    },
    {
        "end_line": 3651,
        "section": "Block quotes",
        "html": "<blockquote>\n<pre><code>code\n</code></pre>\n</blockquote>\n<blockquote>\n<p>not code</p>\n</blockquote>\n",
        "markdown": ">     code\n\n>    not code\n",
        "example": 215,
        "start_line": 3639
    },
    {
        "end_line": 3709,
        "section": "List items",
        "html": "<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n",
        "markdown": "A paragraph\nwith two lines.\n\n    indented code\n\n> A block quote.\n",
        "example": 216,
        "start_line": 3694
    },
    {
        "end_line": 3735,
        "section": "List items",
        "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
        "markdown": "1.  A paragraph\n    with two lines.\n\n        indented code\n\n    > A block quote.\n",
        "example": 217,
        "start_line": 3716
    },
    {
        "end_line": 3758,
        "section": "List items",
        "html": "<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n",
        "markdown": "- one\n\n two\n",
        "example": 218,
        "start_line": 3749
    },
    {
        "end_line": 3772,
        "section": "List items",
        "html": "<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n",
        "markdown": "- one\n\n  two\n",
        "example": 219,
        "start_line": 3761
    },
    {
        "end_line": 3785,
        "section": "List items",
        "html": "<ul>\n<li>one</li>\n</ul>\n<pre><code> two\n</code></pre>\n",
        "markdown": " -    one\n\n     two\n",
        "example": 220,
        "start_line": 3775
    },
    {
        "end_line": 3799,
        "section": "List items",
        "html": "<ul>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ul>\n",
        "markdown": " -    one\n\n      two\n",
        "example": 221,
        "start_line": 3788
    },
    {
        "end_line": 3825,
        "section": "List items",
        "html": "<blockquote>\n<blockquote>\n<ol>\n<li>\n<p>one</p>\n<p>two</p>\n</li>\n</ol>\n</blockquote>\n</blockquote>\n",
        "markdown": "   > > 1.  one\n>>\n>>     two\n",
        "example": 222,
        "start_line": 3810
    },
    {
        "end_line": 3850,
        "section": "List items",
        "html": "<blockquote>\n<blockquote>\n<ul>\n<li>one</li>\n</ul>\n<p>two</p>\n</blockquote>\n</blockquote>\n",
        "markdown": ">>- one\n>>\n  >  > two\n",
        "example": 223,
        "start_line": 3837
    },
    {
        "end_line": 3863,
        "section": "List items",
        "html": "<p>-one</p>\n<p>2.two</p>\n",
        "markdown": "-one\n\n2.two\n",
        "example": 224,
        "start_line": 3856
    },
    {
        "end_line": 3881,
        "section": "List items",
        "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
        "markdown": "- foo\n\n\n  bar\n",
        "example": 225,
        "start_line": 3869
    },
    {
        "end_line": 3908,
        "section": "List items",
        "html": "<ol>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n<p>baz</p>\n<blockquote>\n<p>bam</p>\n</blockquote>\n</li>\n</ol>\n",
        "markdown": "1.  foo\n\n    ```\n    bar\n    ```\n\n    baz\n\n    > bam\n",
        "example": 226,
        "start_line": 3886
    },
    {
        "end_line": 3932,
        "section": "List items",
        "html": "<ul>\n<li>\n<p>Foo</p>\n<pre><code>bar\n\n\nbaz\n</code></pre>\n</li>\n</ul>\n",
        "markdown": "- Foo\n\n      bar\n\n\n      baz\n",
        "example": 227,
        "start_line": 3914
    },
    {
        "end_line": 3942,
        "section": "List items",
        "html": "<ol start=\"123456789\">\n<li>ok</li>\n</ol>\n",
        "markdown": "123456789. ok\n",
        "example": 228,
        "start_line": 3936
    },
    {
        "end_line": 3949,
        "section": "List items",
        "html": "<p>1234567890. not ok</p>\n",
        "markdown": "1234567890. not ok\n",
        "example": 229,
        "start_line": 3945
    },
    {
        "end_line": 3960,
        "section": "List items",
        "html": "<ol start=\"0\">\n<li>ok</li>\n</ol>\n",
        "markdown": "0. ok\n",
        "example": 230,
        "start_line": 3954
    },
    {
        "end_line": 3969,
        "section": "List items",
        "html": "<ol start=\"3\">\n<li>ok</li>\n</ol>\n",
        "markdown": "003. ok\n",
        "example": 231,
        "start_line": 3963
    },
    {
        "end_line": 3978,
        "section": "List items",
        "html": "<p>-1. not ok</p>\n",
        "markdown": "-1. not ok\n",
        "example": 232,
        "start_line": 3974
    },
    {
        "end_line": 4010,
        "section": "List items",
        "html": "<ul>\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ul>\n",
        "markdown": "- foo\n\n      bar\n",
        "example": 233,
        "start_line": 3998
    },
    {
        "end_line": 4027,
        "section": "List items",
        "html": "<ol start=\"10\">\n<li>\n<p>foo</p>\n<pre><code>bar\n</code></pre>\n</li>\n</ol>\n",
        "markdown": "  10.  foo\n\n           bar\n",
        "example": 234,
        "start_line": 4015
    },
    {
        "end_line": 4046,
        "section": "List items",
        "html": "<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n",
        "markdown": "    indented code\n\nparagraph\n\n    more code\n",
        "example": 235,
        "start_line": 4034
    },
    {
        "end_line": 4065,
        "section": "List items",
        "html": "<ol>\n<li>\n<pre><code>indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n",
        "markdown": "1.     indented code\n\n   paragraph\n\n       more code\n",
        "example": 236,
        "start_line": 4049
    },
    {
        "end_line": 4087,
        "section": "List items",
        "html": "<ol>\n<li>\n<pre><code> indented code\n</code></pre>\n<p>paragraph</p>\n<pre><code>more code\n</code></pre>\n</li>\n</ol>\n",
        "markdown": "1.      indented code\n\n   paragraph\n\n       more code\n",
        "example": 237,
        "start_line": 4071
    },
    {
        "end_line": 4105,
        "section": "List items",
        "html": "<p>foo</p>\n<p>bar</p>\n",
        "markdown": "   foo\n\nbar\n",
        "example": 238,
        "start_line": 4098
    },
    {
        "end_line": 4117,
        "section": "List items",
        "html": "<ul>\n<li>foo</li>\n</ul>\n<p>bar</p>\n",
        "markdown": "-    foo\n\n  bar\n",
        "example": 239,
        "start_line": 4108
    },
    {
        "end_line": 4136,
        "section": "List items",
        "html": "<ul>\n<li>\n<p>foo</p>\n<p>bar</p>\n</li>\n</ul>\n",
        "markdown": "-  foo\n\n   bar\n",
        "example": 240,
        "start_line": 4125
    },
    {
        "end_line": 4174,
        "section": "List items",
        "html": "<ul>\n<li>foo</li>\n<li>\n<pre><code>bar\n</code></pre>\n</li>\n<li>\n<pre><code>baz\n</code></pre>\n</li>\n</ul>\n",
        "markdown": "-\n  foo\n-\n  ```\n  bar\n  ```\n-\n      baz\n",
        "example": 241,
        "start_line": 4153
    },
    {
        "end_line": 4186,
        "section": "List items",
        "html": "<ul>\n<li>foo</li>\n</ul>\n",
        "markdown": "-   \n  foo\n",
        "example": 242,
        "start_line": 4179
    },
    {
        "end_line": 4202,
        "section": "List items",
        "html": "<ul>\n<li></li>\n</ul>\n<p>foo</p>\n",
        "markdown": "-\n\n  foo\n",
        "example": 243,
        "start_line": 4193
    },
    {
        "end_line": 4217,
        "section": "List items",
        "html": "<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n",
        "markdown": "- foo\n-\n- bar\n",
        "example": 244,
        "start_line": 4207
    },
    {
        "end_line": 4232,
        "section": "List items",
        "html": "<ul>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ul>\n",
        "markdown": "- foo\n-   \n- bar\n",
        "example": 245,
        "start_line": 4222
    },
    {
        "end_line": 4247,
        "section": "List items",
        "html": "<ol>\n<li>foo</li>\n<li></li>\n<li>bar</li>\n</ol>\n",
        "markdown": "1. foo\n2.\n3. bar\n",
        "example": 246,
        "start_line": 4237
    },
    {
        "end_line": 4258,
        "section": "List items",
        "html": "<ul>\n<li></li>\n</ul>\n",
        "markdown": "*\n",
        "example": 247,
        "start_line": 4252
    },
    {
        "end_line": 4273,
        "section": "List items",
        "html": "<p>foo\n*</p>\n<p>foo\n1.</p>\n",
        "markdown": "foo\n*\n\nfoo\n1.\n",
        "example": 248,
        "start_line": 4262
    },
    {
        "end_line": 4303,
        "section": "List items",
        "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
        "markdown": " 1.  A paragraph\n     with two lines.\n\n         indented code\n\n     > A block quote.\n",
        "example": 249,
        "start_line": 4284
    },
    {
        "end_line": 4327,
        "section": "List items",
        "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
        "markdown": "  1.  A paragraph\n      with two lines.\n\n          indented code\n\n      > A block quote.\n",
        "example": 250,
        "start_line": 4308
    },
    {
        "end_line": 4351,
        "section": "List items",
        "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
        "markdown": "   1.  A paragraph\n       with two lines.\n\n           indented code\n\n       > A block quote.\n",
        "example": 251,
        "start_line": 4332
    },
    {
        "end_line": 4371,
        "section": "List items",
        "html": "<pre><code>1.  A paragraph\n    with two lines.\n\n        indented code\n\n    &gt; A block quote.\n</code></pre>\n",
        "markdown": "    1.  A paragraph\n        with two lines.\n\n            indented code\n\n        > A block quote.\n",
        "example": 252,
        "start_line": 4356
    },
    {
        "end_line": 4405,
        "section": "List items",
        "html": "<ol>\n<li>\n<p>A paragraph\nwith two lines.</p>\n<pre><code>indented code\n</code></pre>\n<blockquote>\n<p>A block quote.</p>\n</blockquote>\n</li>\n</ol>\n",
        "markdown": "  1.  A paragraph\nwith two lines.\n\n          indented code\n\n      > A block quote.\n",
        "example": 253,
        "start_line": 4386
    },
    {
        "end_line": 4418,
        "section": "List items",
        "html": "<ol>\n<li>A paragraph\nwith two lines.</li>\n</ol>\n",
        "markdown": "  1.  A paragraph\n    with two lines.\n",
        "example": 254,
        "start_line": 4410
    },
    {
        "end_line": 4437,
        "section": "List items",
        "html": "<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n",
        "markdown": "> 1. > Blockquote\ncontinued here.\n",
        "example": 255,
        "start_line": 4423
    },
    {
        "end_line": 4454,
        "section": "List items",
        "html": "<blockquote>\n<ol>\n<li>\n<blockquote>\n<p>Blockquote\ncontinued here.</p>\n</blockquote>\n</li>\n</ol>\n</blockquote>\n",
        "markdown": "> 1. > Blockquote\n> continued here.\n",
        "example": 256,
        "start_line": 4440
    },
    {
        "end_line": 4488,
        "section": "List items",
        "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>baz\n<ul>\n<li>boo</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
        "markdown": "- foo\n  - bar\n    - baz\n      - boo\n",
        "example": 257,
        "start_line": 4467
    },
    {
        "end_line": 4505,
        "section": "List items",
        "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n<li>baz</li>\n<li>boo</li>\n</ul>\n",
        "markdown": "- foo\n - bar\n  - baz\n   - boo\n",
        "example": 258,
        "start_line": 4493
    },
    {
        "end_line": 4521,
        "section": "List items",
        "html": "<ol start=\"10\">\n<li>foo\n<ul>\n<li>bar</li>\n</ul>\n</li>\n</ol>\n",
        "markdown": "10) foo\n    - bar\n",
        "example": 259,
        "start_line": 4510
    },
    {
        "end_line": 4536,
        "section": "List items",
        "html": "<ol start=\"10\">\n<li>foo</li>\n</ol>\n<ul>\n<li>bar</li>\n</ul>\n",
        "markdown": "10) foo\n   - bar\n",
        "example": 260,
        "start_line": 4526
    },
    {
        "end_line": 4551,
        "section": "List items",
        "html": "<ul>\n<li>\n<ul>\n<li>foo</li>\n</ul>\n</li>\n</ul>\n",
        "markdown": "- - foo\n",
        "example": 261,
        "start_line": 4541
    },
    {
        "end_line": 4568,
        "section": "List items",
        "html": "<ol>\n<li>\n<ul>\n<li>\n<ol start=\"2\">\n<li>foo</li>\n</ol>\n</li>\n</ul>\n</li>\n</ol>\n",
        "markdown": "1. - 2. foo\n",
        "example": 262,
        "start_line": 4554
    },
    {
        "end_line": 4587,
        "section": "List items",
        "html": "<ul>\n<li>\n<h1>Foo</h1>\n</li>\n<li>\n<h2>Bar</h2>\nbaz</li>\n</ul>\n",
        "markdown": "- # Foo\n- Bar\n  ---\n  baz\n",
        "example": 263,
        "start_line": 4573
    },
    {
        "end_line": 4821,
        "section": "Lists",
        "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<ul>\n<li>baz</li>\n</ul>\n",
        "markdown": "- foo\n- bar\n+ baz\n",
        "example": 264,
        "start_line": 4809
    },
    {
        "end_line": 4836,
        "section": "Lists",
        "html": "<ol>\n<li>foo</li>\n<li>bar</li>\n</ol>\n<ol start=\"3\">\n<li>baz</li>\n</ol>\n",
        "markdown": "1. foo\n2. bar\n3) baz\n",
        "example": 265,
        "start_line": 4824
    },
    {
        "end_line": 4853,
        "section": "Lists",
        "html": "<p>Foo</p>\n<ul>\n<li>bar</li>\n<li>baz</li>\n</ul>\n",
        "markdown": "Foo\n- bar\n- baz\n",
        "example": 266,
        "start_line": 4843
    },
    {
        "end_line": 4926,
        "section": "Lists",
        "html": "<p>The number of windows in my house is\n14.  The number of doors is 6.</p>\n",
        "markdown": "The number of windows in my house is\n14.  The number of doors is 6.\n",
        "example": 267,
        "start_line": 4920
    },
    {
        "end_line": 4938,
        "section": "Lists",
        "html": "<p>The number of windows in my house is</p>\n<ol>\n<li>The number of doors is 6.</li>\n</ol>\n",
        "markdown": "The number of windows in my house is\n1.  The number of doors is 6.\n",
        "example": 268,
        "start_line": 4930
    },
    {
        "end_line": 4963,
        "section": "Lists",
        "html": "<ul>\n<li>\n<p>foo</p>\n</li>\n<li>\n<p>bar</p>\n</li>\n<li>\n<p>baz</p>\n</li>\n</ul>\n",
        "markdown": "- foo\n\n- bar\n\n\n- baz\n",
        "example": 269,
        "start_line": 4944
    },
    {
        "end_line": 4987,
        "section": "Lists",
        "html": "<ul>\n<li>foo\n<ul>\n<li>bar\n<ul>\n<li>\n<p>baz</p>\n<p>bim</p>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n",
        "markdown": "- foo\n  - bar\n    - baz\n\n\n      bim\n",
        "example": 270,
        "start_line": 4965
    },
    {
        "end_line": 5013,
        "section": "Lists",
        "html": "<ul>\n<li>foo</li>\n<li>bar</li>\n</ul>\n<!-- -->\n<ul>\n<li>baz</li>\n<li>bim</li>\n</ul>\n",
        "markdown": "- foo\n- bar\n\n<!-- -->\n\n- baz\n- bim\n",
        "example": 271,
        "start_line": 4995
    },
    {
        "end_line": 5039,
        "section": "Lists",
        "html": "<ul>\n<li>\n<p>foo</p>\n<p>notcode</p>\n</li>\n<li>\n<p>foo</p>\n</li>\n</ul>\n<!-- -->\n<pre><code>code\n</code></pre>\n",
        "markdown": "-   foo\n\n    notcode\n\n-   foo\n\n<!-- -->\n\n    code\n",
        "example": 272,
        "start_line": 5016
    },
    {
        "end_line": 5069,
        "section": "Lists",
        "html": "<ul>\n<li>a</li>\n<li>b</li>\n<li>c</li>\n<li>d</li>\n<li>e</li>\n<li>f</li>\n<li>g</li>\n<li>h</li>\n<li>i</li>\n</ul>\n",
        "markdown": "- a\n - b\n  - c\n   - d\n    - e\n   - f\n  - g\n - h\n- i\n",
        "example": 273,
        "start_line": 5047
    },
    {
        "end_line": 5090,
        "section": "Lists",
        "html": "<ol>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ol>\n",
        "markdown": "1. a\n\n  2. b\n\n    3. c\n",
        "example": 274,
        "start_line": 5072
    },
    {
        "end_line": 5113,
        "section": "Lists",
        "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>c</p>\n</li>\n</ul>\n",
        "markdown": "- a\n- b\n\n- c\n",
        "example": 275,
        "start_line": 5096
    },
    {
        "end_line": 5133,
        "section": "Lists",
        "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li></li>\n<li>\n<p>c</p>\n</li>\n</ul>\n",
        "markdown": "* a\n*\n\n* c\n",
        "example": 276,
        "start_line": 5118
    },
    {
        "end_line": 5159,
        "section": "Lists",
        "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n",
        "markdown": "- a\n- b\n\n  c\n- d\n",
        "example": 277,
        "start_line": 5140
    },
    {
        "end_line": 5180,
        "section": "Lists",
        "html": "<ul>\n<li>\n<p>a</p>\n</li>\n<li>\n<p>b</p>\n</li>\n<li>\n<p>d</p>\n</li>\n</ul>\n",
        "markdown": "- a\n- b\n\n  [ref]: /url\n- d\n",
        "example": 278,
        "start_line": 5162
    },
    {
        "end_line": 5204,
        "section": "Lists",
        "html": "<ul>\n<li>a</li>\n<li>\n<pre><code>b\n\n\n</code></pre>\n</li>\n<li>c</li>\n</ul>\n",
        "markdown": "- a\n- ```\n  b\n\n\n  ```\n- c\n",
        "example": 279,
        "start_line": 5185
    },
    {
        "end_line": 5229,
        "section": "Lists",
        "html": "<ul>\n<li>a\n<ul>\n<li>\n<p>b</p>\n<p>c</p>\n</li>\n</ul>\n</li>\n<li>d</li>\n</ul>\n",
        "markdown": "- a\n  - b\n\n    c\n- d\n",
        "example": 280,
        "start_line": 5211
    },
    {
        "end_line": 5249,
        "section": "Lists",
        "html": "<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n</li>\n<li>c</li>\n</ul>\n",
        "markdown": "* a\n  > b\n  >\n* c\n",
        "example": 281,
        "start_line": 5235
    },
    {
        "end_line": 5273,
        "section": "Lists",
        "html": "<ul>\n<li>a\n<blockquote>\n<p>b</p>\n</blockquote>\n<pre><code>c\n</code></pre>\n</li>\n<li>d</li>\n</ul>\n",
        "markdown": "- a\n  > b\n  ```\n  c\n  ```\n- d\n",
        "example": 282,
        "start_line": 5255
    },
    {
        "end_line": 5284,
        "section": "Lists",
        "html": "<ul>\n<li>a</li>\n</ul>\n",
        "markdown": "- a\n",
        "example": 283,
        "start_line": 5278
    },
    {
        "end_line": 5298,
        "section": "Lists",
        "html": "<ul>\n<li>a\n<ul>\n<li>b</li>\n</ul>\n</li>\n</ul>\n",
        "markdown": "- a\n  - b\n",
        "example": 284,
        "start_line": 5287
    },
    {
        "end_line": 5318,
        "section": "Lists",
        "html": "<ol>\n<li>\n<pre><code>foo\n</code></pre>\n<p>bar</p>\n</li>\n</ol>\n",
        "markdown": "1. ```\n   foo\n   ```\n\n   bar\n",
        "example": 285,
        "start_line": 5304
    },
    {
        "end_line": 5338,
        "section": "Lists",
        "html": "<ul>\n<li>\n<p>foo</p>\n<ul>\n<li>bar</li>\n</ul>\n<p>baz</p>\n</li>\n</ul>\n",
        "markdown": "* foo\n  * bar\n\n  baz\n",
        "example": 286,
        "start_line": 5323
    },
    {
        "end_line": 5366,
        "section": "Lists",
        "html": "<ul>\n<li>\n<p>a</p>\n<ul>\n<li>b</li>\n<li>c</li>\n</ul>\n</li>\n<li>\n<p>d</p>\n<ul>\n<li>e</li>\n<li>f</li>\n</ul>\n</li>\n</ul>\n",
        "markdown": "- a\n  - b\n  - c\n\n- d\n  - e\n  - f\n",
        "example": 287,
        "start_line": 5341
    },
    {
        "end_line": 5379,
        "section": "Inlines",
        "html": "<p><code>hi</code>lo`</p>\n",
        "markdown": "`hi`lo`\n",
        "example": 288,
        "start_line": 5375
    },
    {
        "end_line": 5393,
        "section": "Backslash escapes",
        "html": "<p>!&quot;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\\]^_`{|}~</p>\n",
        "markdown": "\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\\\\\]\\^\\_\\`\\{\\|\\}\\~\n",
        "example": 289,
        "start_line": 5389
    },
    {
        "end_line": 5403,
        "section": "Backslash escapes",
        "html": "<p>\\\t\\A\\a\\ \\3\\φ\\«</p>\n",
        "markdown": "\\\t\\A\\a\\ \\3\\φ\\«\n",
        "example": 290,
        "start_line": 5399
    },
    {
        "end_line": 5427,
        "section": "Backslash escapes",
        "html": "<p>*not emphasized*\n&lt;br/&gt; not a tag\n[not a link](/foo)\n`not code`\n1. not a list\n* not a list\n# not a heading\n[foo]: /url &quot;not a reference&quot;</p>\n",
        "markdown": "\\*not emphasized*\n\\<br/> not a tag\n\\[not a link](/foo)\n\\`not code`\n1\\. not a list\n\\* not a list\n\\# not a heading\n\\[foo]: /url \"not a reference\"\n",
        "example": 291,
        "start_line": 5409
    },
    {
        "end_line": 5436,
        "section": "Backslash escapes",
        "html": "<p>\\<em>emphasis</em></p>\n",
        "markdown": "\\\\*emphasis*\n",
        "example": 292,
        "start_line": 5432
    },
    {
        "end_line": 5447,
        "section": "Backslash escapes",
        "html": "<p>foo<br />\nbar</p>\n",
        "markdown": "foo\\\nbar\n",
        "example": 293,
        "start_line": 5441
    },
    {
        "end_line": 5457,
        "section": "Backslash escapes",
        "html": "<p><code>\\[\\`</code></p>\n",
        "markdown": "`` \\[\\` ``\n",
        "example": 294,
        "start_line": 5453
    },
    {
        "end_line": 5465,
        "section": "Backslash escapes",
        "html": "<pre><code>\\[\\]\n</code></pre>\n",
        "markdown": "    \\[\\]\n",
        "example": 295,
        "start_line": 5460
    },
    {
        "end_line": 5475,
        "section": "Backslash escapes",
        "html": "<pre><code>\\[\\]\n</code></pre>\n",
        "markdown": "~~~\n\\[\\]\n~~~\n",
        "example": 296,
        "start_line": 5468
    },
    {
        "end_line": 5482,
        "section": "Backslash escapes",
        "html": "<p><a href=\"http://example.com?find=%5C*\">http://example.com?find=\\*</a></p>\n",
        "markdown": "<http://example.com?find=\\*>\n",
        "example": 297,
        "start_line": 5478
    },
    {
        "end_line": 5489,
        "section": "Backslash escapes",
        "html": "<a href=\"/bar\\/)\">\n",
        "markdown": "<a href=\"/bar\\/)\">\n",
        "example": 298,
        "start_line": 5485
    },
    {
        "end_line": 5499,
        "section": "Backslash escapes",
        "html": "<p><a href=\"/bar*\" title=\"ti*tle\">foo</a></p>\n",
        "markdown": "[foo](/bar\\* \"ti\\*tle\")\n",
        "example": 299,
        "start_line": 5495
    },
    {
        "end_line": 5508,
        "section": "Backslash escapes",
        "html": "<p><a href=\"/bar*\" title=\"ti*tle\">foo</a></p>\n",
        "markdown": "[foo]\n\n[foo]: /bar\\* \"ti\\*tle\"\n",
        "example": 300,
        "start_line": 5502
    },
    {
        "end_line": 5518,
        "section": "Backslash escapes",
        "html": "<pre><code class=\"language-foo+bar\">foo\n</code></pre>\n",
        "markdown": "``` foo\\+bar\nfoo\n```\n",
        "example": 301,
        "start_line": 5511
    },
    {
        "end_line": 5546,
        "section": "Entity and numeric character references",
        "html": "<p>  &amp; © Æ Ď\n¾ ℋ ⅆ\n∲ ≧̸</p>\n",
        "markdown": "&nbsp; &amp; &copy; &AElig; &Dcaron;\n&frac34; &HilbertSpace; &DifferentialD;\n&ClockwiseContourIntegral; &ngE;\n",
        "example": 302,
        "start_line": 5538
    },
    {
        "end_line": 5561,
        "section": "Entity and numeric character references",
        "html": "<p># Ӓ Ϡ � �</p>\n",
        "markdown": "&#35; &#1234; &#992; &#98765432; &#0;\n",
        "example": 303,
        "start_line": 5557
    },
    {
        "end_line": 5574,
        "section": "Entity and numeric character references",
        "html": "<p>&quot; ആ ಫ</p>\n",
        "markdown": "&#X22; &#XD06; &#xcab;\n",
        "example": 304,
        "start_line": 5570
    },
    {
        "end_line": 5585,
        "section": "Entity and numeric character references",
        "html": "<p>&amp;nbsp &amp;x; &amp;#; &amp;#x;\n&amp;ThisIsNotDefined; &amp;hi?;</p>\n",
        "markdown": "&nbsp &x; &#; &#x;\n&ThisIsNotDefined; &hi?;\n",
        "example": 305,
        "start_line": 5579
    },
    {
        "end_line": 5596,
        "section": "Entity and numeric character references",
        "html": "<p>&amp;copy</p>\n",
        "markdown": "&copy\n",
        "example": 306,
        "start_line": 5592
    },
    {
        "end_line": 5606,
        "section": "Entity and numeric character references",
        "html": "<p>&amp;MadeUpEntity;</p>\n",
        "markdown": "&MadeUpEntity;\n",
        "example": 307,
        "start_line": 5602
    },
    {
        "end_line": 5617,
        "section": "Entity and numeric character references",
        "html": "<a href=\"&ouml;&ouml;.html\">\n",
        "markdown": "<a href=\"&ouml;&ouml;.html\">\n",
        "example": 308,
        "start_line": 5613
    },
    {
        "end_line": 5624,
        "section": "Entity and numeric character references",
        "html": "<p><a href=\"/f%C3%B6%C3%B6\" title=\"föö\">foo</a></p>\n",
        "markdown": "[foo](/f&ouml;&ouml; \"f&ouml;&ouml;\")\n",
        "example": 309,
        "start_line": 5620
    },
    {
        "end_line": 5633,
        "section": "Entity and numeric character references",
        "html": "<p><a href=\"/f%C3%B6%C3%B6\" title=\"föö\">foo</a></p>\n",
        "markdown": "[foo]\n\n[foo]: /f&ouml;&ouml; \"f&ouml;&ouml;\"\n",
        "example": 310,
        "start_line": 5627
    },
    {
        "end_line": 5643,
        "section": "Entity and numeric character references",
        "html": "<pre><code class=\"language-föö\">foo\n</code></pre>\n",
        "markdown": "``` f&ouml;&ouml;\nfoo\n```\n",
        "example": 311,
        "start_line": 5636
    },
    {
        "end_line": 5653,
        "section": "Entity and numeric character references",
        "html": "<p><code>f&amp;ouml;&amp;ouml;</code></p>\n",
        "markdown": "`f&ouml;&ouml;`\n",
        "example": 312,
        "start_line": 5649
    },
    {
        "end_line": 5661,
        "section": "Entity and numeric character references",
        "html": "<pre><code>f&amp;ouml;f&amp;ouml;\n</code></pre>\n",
        "markdown": "    f&ouml;f&ouml;\n",
        "example": 313,
        "start_line": 5656
    },
    {
        "end_line": 5682,
        "section": "Code spans",
        "html": "<p><code>foo</code></p>\n",
        "markdown": "`foo`\n",
        "example": 314,
        "start_line": 5678
    },
    {
        "end_line": 5692,
        "section": "Code spans",
        "html": "<p><code>foo ` bar</code></p>\n",
        "markdown": "`` foo ` bar  ``\n",
        "example": 315,
        "start_line": 5688
    },
    {
        "end_line": 5702,
        "section": "Code spans",
        "html": "<p><code>``</code></p>\n",
        "markdown": "` `` `\n",
        "example": 316,
        "start_line": 5698
    },
    {
        "end_line": 5713,
        "section": "Code spans",
        "html": "<p><code>foo</code></p>\n",
        "markdown": "``\nfoo\n``\n",
        "example": 317,
        "start_line": 5707
    },
    {
        "end_line": 5724,
        "section": "Code spans",
        "html": "<p><code>foo bar baz</code></p>\n",
        "markdown": "`foo   bar\n  baz`\n",
        "example": 318,
        "start_line": 5719
    },
    {
        "end_line": 5734,
        "section": "Code spans",
        "html": "<p><code>a  b</code></p>\n",
        "markdown": "`a  b`\n",
        "example": 319,
        "start_line": 5730
    },
    {
        "end_line": 5754,
        "section": "Code spans",
        "html": "<p><code>foo `` bar</code></p>\n",
        "markdown": "`foo `` bar`\n",
        "example": 320,
        "start_line": 5750
    },
    {
        "end_line": 5764,
        "section": "Code spans",
        "html": "<p><code>foo\\</code>bar`</p>\n",
        "markdown": "`foo\\`bar`\n",
        "example": 321,
        "start_line": 5760
    },
    {
        "end_line": 5780,
        "section": "Code spans",
        "html": "<p>*foo<code>*</code></p>\n",
        "markdown": "*foo`*`\n",
        "example": 322,
        "start_line": 5776
    },
    {
        "end_line": 5789,
        "section": "Code spans",
        "html": "<p>[not a <code>link](/foo</code>)</p>\n",
        "markdown": "[not a `link](/foo`)\n",
        "example": 323,
        "start_line": 5785
    },
    {
        "end_line": 5799,
        "section": "Code spans",
        "html": "<p><code>&lt;a href=&quot;</code>&quot;&gt;`</p>\n",
        "markdown": "`<a href=\"`\">`\n",
        "example": 324,
        "start_line": 5795
    },
    {
        "end_line": 5808,
        "section": "Code spans",
        "html": "<p><a href=\"`\">`</p>\n",
        "markdown": "<a href=\"`\">`\n",
        "example": 325,
        "start_line": 5804
    },
    {
        "end_line": 5817,
        "section": "Code spans",
        "html": "<p><code>&lt;http://foo.bar.</code>baz&gt;`</p>\n",
        "markdown": "`<http://foo.bar.`baz>`\n",
        "example": 326,
        "start_line": 5813
    },
    {
        "end_line": 5826,
        "section": "Code spans",
        "html": "<p><a href=\"http://foo.bar.%60baz\">http://foo.bar.`baz</a>`</p>\n",
        "markdown": "<http://foo.bar.`baz>`\n",
        "example": 327,
        "start_line": 5822
    },
    {
        "end_line": 5836,
        "section": "Code spans",
        "html": "<p>```foo``</p>\n",
        "markdown": "```foo``\n",
        "example": 328,
        "start_line": 5832
    },
    {
        "end_line": 5843,
        "section": "Code spans",
        "html": "<p>`foo</p>\n",
        "markdown": "`foo\n",
        "example": 329,
        "start_line": 5839
    },
    {
        "end_line": 5852,
        "section": "Code spans",
        "html": "<p>`foo<code>bar</code></p>\n",
        "markdown": "`foo``bar``\n",
        "example": 330,
        "start_line": 5848
    },
    {
        "end_line": 6065,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo bar</em></p>\n",
        "markdown": "*foo bar*\n",
        "example": 331,
        "start_line": 6061
    },
    {
        "end_line": 6075,
        "section": "Emphasis and strong emphasis",
        "html": "<p>a * foo bar*</p>\n",
        "markdown": "a * foo bar*\n",
        "example": 332,
        "start_line": 6071
    },
    {
        "end_line": 6086,
        "section": "Emphasis and strong emphasis",
        "html": "<p>a*&quot;foo&quot;*</p>\n",
        "markdown": "a*\"foo\"*\n",
        "example": 333,
        "start_line": 6082
    },
    {
        "end_line": 6095,
        "section": "Emphasis and strong emphasis",
        "html": "<p>* a *</p>\n",
        "markdown": "* a *\n",
        "example": 334,
        "start_line": 6091
    },
    {
        "end_line": 6104,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo<em>bar</em></p>\n",
        "markdown": "foo*bar*\n",
        "example": 335,
        "start_line": 6100
    },
    {
        "end_line": 6111,
        "section": "Emphasis and strong emphasis",
        "html": "<p>5<em>6</em>78</p>\n",
        "markdown": "5*6*78\n",
        "example": 336,
        "start_line": 6107
    },
    {
        "end_line": 6120,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo bar</em></p>\n",
        "markdown": "_foo bar_\n",
        "example": 337,
        "start_line": 6116
    },
    {
        "end_line": 6130,
        "section": "Emphasis and strong emphasis",
        "html": "<p>_ foo bar_</p>\n",
        "markdown": "_ foo bar_\n",
        "example": 338,
        "start_line": 6126
    },
    {
        "end_line": 6140,
        "section": "Emphasis and strong emphasis",
        "html": "<p>a_&quot;foo&quot;_</p>\n",
        "markdown": "a_\"foo\"_\n",
        "example": 339,
        "start_line": 6136
    },
    {
        "end_line": 6149,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo_bar_</p>\n",
        "markdown": "foo_bar_\n",
        "example": 340,
        "start_line": 6145
    },
    {
        "end_line": 6156,
        "section": "Emphasis and strong emphasis",
        "html": "<p>5_6_78</p>\n",
        "markdown": "5_6_78\n",
        "example": 341,
        "start_line": 6152
    },
    {
        "end_line": 6163,
        "section": "Emphasis and strong emphasis",
        "html": "<p>пристаням_стремятся_</p>\n",
        "markdown": "пристаням_стремятся_\n",
        "example": 342,
        "start_line": 6159
    },
    {
        "end_line": 6173,
        "section": "Emphasis and strong emphasis",
        "html": "<p>aa_&quot;bb&quot;_cc</p>\n",
        "markdown": "aa_\"bb\"_cc\n",
        "example": 343,
        "start_line": 6169
    },
    {
        "end_line": 6184,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo-<em>(bar)</em></p>\n",
        "markdown": "foo-_(bar)_\n",
        "example": 344,
        "start_line": 6180
    },
    {
        "end_line": 6196,
        "section": "Emphasis and strong emphasis",
        "html": "<p>_foo*</p>\n",
        "markdown": "_foo*\n",
        "example": 345,
        "start_line": 6192
    },
    {
        "end_line": 6206,
        "section": "Emphasis and strong emphasis",
        "html": "<p>*foo bar *</p>\n",
        "markdown": "*foo bar *\n",
        "example": 346,
        "start_line": 6202
    },
    {
        "end_line": 6217,
        "section": "Emphasis and strong emphasis",
        "html": "<p>*foo bar\n*</p>\n",
        "markdown": "*foo bar\n*\n",
        "example": 347,
        "start_line": 6211
    },
    {
        "end_line": 6228,
        "section": "Emphasis and strong emphasis",
        "html": "<p>*(*foo)</p>\n",
        "markdown": "*(*foo)\n",
        "example": 348,
        "start_line": 6224
    },
    {
        "end_line": 6238,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>(<em>foo</em>)</em></p>\n",
        "markdown": "*(*foo*)*\n",
        "example": 349,
        "start_line": 6234
    },
    {
        "end_line": 6247,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo</em>bar</p>\n",
        "markdown": "*foo*bar\n",
        "example": 350,
        "start_line": 6243
    },
    {
        "end_line": 6260,
        "section": "Emphasis and strong emphasis",
        "html": "<p>_foo bar _</p>\n",
        "markdown": "_foo bar _\n",
        "example": 351,
        "start_line": 6256
    },
    {
        "end_line": 6270,
        "section": "Emphasis and strong emphasis",
        "html": "<p>_(_foo)</p>\n",
        "markdown": "_(_foo)\n",
        "example": 352,
        "start_line": 6266
    },
    {
        "end_line": 6279,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>(<em>foo</em>)</em></p>\n",
        "markdown": "_(_foo_)_\n",
        "example": 353,
        "start_line": 6275
    },
    {
        "end_line": 6288,
        "section": "Emphasis and strong emphasis",
        "html": "<p>_foo_bar</p>\n",
        "markdown": "_foo_bar\n",
        "example": 354,
        "start_line": 6284
    },
    {
        "end_line": 6295,
        "section": "Emphasis and strong emphasis",
        "html": "<p>_пристаням_стремятся</p>\n",
        "markdown": "_пристаням_стремятся\n",
        "example": 355,
        "start_line": 6291
    },
    {
        "end_line": 6302,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo_bar_baz</em></p>\n",
        "markdown": "_foo_bar_baz_\n",
        "example": 356,
        "start_line": 6298
    },
    {
        "end_line": 6313,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>(bar)</em>.</p>\n",
        "markdown": "_(bar)_.\n",
        "example": 357,
        "start_line": 6309
    },
    {
        "end_line": 6322,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo bar</strong></p>\n",
        "markdown": "**foo bar**\n",
        "example": 358,
        "start_line": 6318
    },
    {
        "end_line": 6332,
        "section": "Emphasis and strong emphasis",
        "html": "<p>** foo bar**</p>\n",
        "markdown": "** foo bar**\n",
        "example": 359,
        "start_line": 6328
    },
    {
        "end_line": 6343,
        "section": "Emphasis and strong emphasis",
        "html": "<p>a**&quot;foo&quot;**</p>\n",
        "markdown": "a**\"foo\"**\n",
        "example": 360,
        "start_line": 6339
    },
    {
        "end_line": 6352,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo<strong>bar</strong></p>\n",
        "markdown": "foo**bar**\n",
        "example": 361,
        "start_line": 6348
    },
    {
        "end_line": 6361,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo bar</strong></p>\n",
        "markdown": "__foo bar__\n",
        "example": 362,
        "start_line": 6357
    },
    {
        "end_line": 6371,
        "section": "Emphasis and strong emphasis",
        "html": "<p>__ foo bar__</p>\n",
        "markdown": "__ foo bar__\n",
        "example": 363,
        "start_line": 6367
    },
    {
        "end_line": 6381,
        "section": "Emphasis and strong emphasis",
        "html": "<p>__\nfoo bar__</p>\n",
        "markdown": "__\nfoo bar__\n",
        "example": 364,
        "start_line": 6375
    },
    {
        "end_line": 6391,
        "section": "Emphasis and strong emphasis",
        "html": "<p>a__&quot;foo&quot;__</p>\n",
        "markdown": "a__\"foo\"__\n",
        "example": 365,
        "start_line": 6387
    },
    {
        "end_line": 6400,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo__bar__</p>\n",
        "markdown": "foo__bar__\n",
        "example": 366,
        "start_line": 6396
    },
    {
        "end_line": 6407,
        "section": "Emphasis and strong emphasis",
        "html": "<p>5__6__78</p>\n",
        "markdown": "5__6__78\n",
        "example": 367,
        "start_line": 6403
    },
    {
        "end_line": 6414,
        "section": "Emphasis and strong emphasis",
        "html": "<p>пристаням__стремятся__</p>\n",
        "markdown": "пристаням__стремятся__\n",
        "example": 368,
        "start_line": 6410
    },
    {
        "end_line": 6421,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo, <strong>bar</strong>, baz</strong></p>\n",
        "markdown": "__foo, __bar__, baz__\n",
        "example": 369,
        "start_line": 6417
    },
    {
        "end_line": 6432,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo-<strong>(bar)</strong></p>\n",
        "markdown": "foo-__(bar)__\n",
        "example": 370,
        "start_line": 6428
    },
    {
        "end_line": 6445,
        "section": "Emphasis and strong emphasis",
        "html": "<p>**foo bar **</p>\n",
        "markdown": "**foo bar **\n",
        "example": 371,
        "start_line": 6441
    },
    {
        "end_line": 6458,
        "section": "Emphasis and strong emphasis",
        "html": "<p>**(**foo)</p>\n",
        "markdown": "**(**foo)\n",
        "example": 372,
        "start_line": 6454
    },
    {
        "end_line": 6468,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>(<strong>foo</strong>)</em></p>\n",
        "markdown": "*(**foo**)*\n",
        "example": 373,
        "start_line": 6464
    },
    {
        "end_line": 6477,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>Gomphocarpus (<em>Gomphocarpus physocarpus</em>, syn.\n<em>Asclepias physocarpa</em>)</strong></p>\n",
        "markdown": "**Gomphocarpus (*Gomphocarpus physocarpus*, syn.\n*Asclepias physocarpa*)**\n",
        "example": 374,
        "start_line": 6471
    },
    {
        "end_line": 6484,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo &quot;<em>bar</em>&quot; foo</strong></p>\n",
        "markdown": "**foo \"*bar*\" foo**\n",
        "example": 375,
        "start_line": 6480
    },
    {
        "end_line": 6493,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo</strong>bar</p>\n",
        "markdown": "**foo**bar\n",
        "example": 376,
        "start_line": 6489
    },
    {
        "end_line": 6505,
        "section": "Emphasis and strong emphasis",
        "html": "<p>__foo bar __</p>\n",
        "markdown": "__foo bar __\n",
        "example": 377,
        "start_line": 6501
    },
    {
        "end_line": 6515,
        "section": "Emphasis and strong emphasis",
        "html": "<p>__(__foo)</p>\n",
        "markdown": "__(__foo)\n",
        "example": 378,
        "start_line": 6511
    },
    {
        "end_line": 6525,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>(<strong>foo</strong>)</em></p>\n",
        "markdown": "_(__foo__)_\n",
        "example": 379,
        "start_line": 6521
    },
    {
        "end_line": 6534,
        "section": "Emphasis and strong emphasis",
        "html": "<p>__foo__bar</p>\n",
        "markdown": "__foo__bar\n",
        "example": 380,
        "start_line": 6530
    },
    {
        "end_line": 6541,
        "section": "Emphasis and strong emphasis",
        "html": "<p>__пристаням__стремятся</p>\n",
        "markdown": "__пристаням__стремятся\n",
        "example": 381,
        "start_line": 6537
    },
    {
        "end_line": 6548,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo__bar__baz</strong></p>\n",
        "markdown": "__foo__bar__baz__\n",
        "example": 382,
        "start_line": 6544
    },
    {
        "end_line": 6559,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>(bar)</strong>.</p>\n",
        "markdown": "__(bar)__.\n",
        "example": 383,
        "start_line": 6555
    },
    {
        "end_line": 6571,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo <a href=\"/url\">bar</a></em></p>\n",
        "markdown": "*foo [bar](/url)*\n",
        "example": 384,
        "start_line": 6567
    },
    {
        "end_line": 6580,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo\nbar</em></p>\n",
        "markdown": "*foo\nbar*\n",
        "example": 385,
        "start_line": 6574
    },
    {
        "end_line": 6590,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo <strong>bar</strong> baz</em></p>\n",
        "markdown": "_foo __bar__ baz_\n",
        "example": 386,
        "start_line": 6586
    },
    {
        "end_line": 6597,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo <em>bar</em> baz</em></p>\n",
        "markdown": "_foo _bar_ baz_\n",
        "example": 387,
        "start_line": 6593
    },
    {
        "end_line": 6604,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em><em>foo</em> bar</em></p>\n",
        "markdown": "__foo_ bar_\n",
        "example": 388,
        "start_line": 6600
    },
    {
        "end_line": 6611,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo <em>bar</em></em></p>\n",
        "markdown": "*foo *bar**\n",
        "example": 389,
        "start_line": 6607
    },
    {
        "end_line": 6618,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo <strong>bar</strong> baz</em></p>\n",
        "markdown": "*foo **bar** baz*\n",
        "example": 390,
        "start_line": 6614
    },
    {
        "end_line": 6624,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo<strong>bar</strong>baz</em></p>\n",
        "markdown": "*foo**bar**baz*\n",
        "example": 391,
        "start_line": 6620
    },
    {
        "end_line": 6649,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em><strong>foo</strong> bar</em></p>\n",
        "markdown": "***foo** bar*\n",
        "example": 392,
        "start_line": 6645
    },
    {
        "end_line": 6656,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo <strong>bar</strong></em></p>\n",
        "markdown": "*foo **bar***\n",
        "example": 393,
        "start_line": 6652
    },
    {
        "end_line": 6663,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo<strong>bar</strong></em></p>\n",
        "markdown": "*foo**bar***\n",
        "example": 394,
        "start_line": 6659
    },
    {
        "end_line": 6672,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo <strong>bar <em>baz</em> bim</strong> bop</em></p>\n",
        "markdown": "*foo **bar *baz* bim** bop*\n",
        "example": 395,
        "start_line": 6668
    },
    {
        "end_line": 6679,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo <a href=\"/url\"><em>bar</em></a></em></p>\n",
        "markdown": "*foo [*bar*](/url)*\n",
        "example": 396,
        "start_line": 6675
    },
    {
        "end_line": 6688,
        "section": "Emphasis and strong emphasis",
        "html": "<p>** is not an empty emphasis</p>\n",
        "markdown": "** is not an empty emphasis\n",
        "example": 397,
        "start_line": 6684
    },
    {
        "end_line": 6695,
        "section": "Emphasis and strong emphasis",
        "html": "<p>**** is not an empty strong emphasis</p>\n",
        "markdown": "**** is not an empty strong emphasis\n",
        "example": 398,
        "start_line": 6691
    },
    {
        "end_line": 6708,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo <a href=\"/url\">bar</a></strong></p>\n",
        "markdown": "**foo [bar](/url)**\n",
        "example": 399,
        "start_line": 6704
    },
    {
        "end_line": 6717,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo\nbar</strong></p>\n",
        "markdown": "**foo\nbar**\n",
        "example": 400,
        "start_line": 6711
    },
    {
        "end_line": 6727,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo <em>bar</em> baz</strong></p>\n",
        "markdown": "__foo _bar_ baz__\n",
        "example": 401,
        "start_line": 6723
    },
    {
        "end_line": 6734,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo <strong>bar</strong> baz</strong></p>\n",
        "markdown": "__foo __bar__ baz__\n",
        "example": 402,
        "start_line": 6730
    },
    {
        "end_line": 6741,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong><strong>foo</strong> bar</strong></p>\n",
        "markdown": "____foo__ bar__\n",
        "example": 403,
        "start_line": 6737
    },
    {
        "end_line": 6748,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo <strong>bar</strong></strong></p>\n",
        "markdown": "**foo **bar****\n",
        "example": 404,
        "start_line": 6744
    },
    {
        "end_line": 6755,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo <em>bar</em> baz</strong></p>\n",
        "markdown": "**foo *bar* baz**\n",
        "example": 405,
        "start_line": 6751
    },
    {
        "end_line": 6762,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo<em>bar</em>baz</strong></p>\n",
        "markdown": "**foo*bar*baz**\n",
        "example": 406,
        "start_line": 6758
    },
    {
        "end_line": 6769,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong><em>foo</em> bar</strong></p>\n",
        "markdown": "***foo* bar**\n",
        "example": 407,
        "start_line": 6765
    },
    {
        "end_line": 6776,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo <em>bar</em></strong></p>\n",
        "markdown": "**foo *bar***\n",
        "example": 408,
        "start_line": 6772
    },
    {
        "end_line": 6787,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo <em>bar <strong>baz</strong>\nbim</em> bop</strong></p>\n",
        "markdown": "**foo *bar **baz**\nbim* bop**\n",
        "example": 409,
        "start_line": 6781
    },
    {
        "end_line": 6794,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo <a href=\"/url\"><em>bar</em></a></strong></p>\n",
        "markdown": "**foo [*bar*](/url)**\n",
        "example": 410,
        "start_line": 6790
    },
    {
        "end_line": 6803,
        "section": "Emphasis and strong emphasis",
        "html": "<p>__ is not an empty emphasis</p>\n",
        "markdown": "__ is not an empty emphasis\n",
        "example": 411,
        "start_line": 6799
    },
    {
        "end_line": 6810,
        "section": "Emphasis and strong emphasis",
        "html": "<p>____ is not an empty strong emphasis</p>\n",
        "markdown": "____ is not an empty strong emphasis\n",
        "example": 412,
        "start_line": 6806
    },
    {
        "end_line": 6820,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo ***</p>\n",
        "markdown": "foo ***\n",
        "example": 413,
        "start_line": 6816
    },
    {
        "end_line": 6827,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo <em>*</em></p>\n",
        "markdown": "foo *\\**\n",
        "example": 414,
        "start_line": 6823
    },
    {
        "end_line": 6834,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo <em>_</em></p>\n",
        "markdown": "foo *_*\n",
        "example": 415,
        "start_line": 6830
    },
    {
        "end_line": 6841,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo *****</p>\n",
        "markdown": "foo *****\n",
        "example": 416,
        "start_line": 6837
    },
    {
        "end_line": 6848,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo <strong>*</strong></p>\n",
        "markdown": "foo **\\***\n",
        "example": 417,
        "start_line": 6844
    },
    {
        "end_line": 6855,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo <strong>_</strong></p>\n",
        "markdown": "foo **_**\n",
        "example": 418,
        "start_line": 6851
    },
    {
        "end_line": 6866,
        "section": "Emphasis and strong emphasis",
        "html": "<p>*<em>foo</em></p>\n",
        "markdown": "**foo*\n",
        "example": 419,
        "start_line": 6862
    },
    {
        "end_line": 6873,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo</em>*</p>\n",
        "markdown": "*foo**\n",
        "example": 420,
        "start_line": 6869
    },
    {
        "end_line": 6880,
        "section": "Emphasis and strong emphasis",
        "html": "<p>*<strong>foo</strong></p>\n",
        "markdown": "***foo**\n",
        "example": 421,
        "start_line": 6876
    },
    {
        "end_line": 6887,
        "section": "Emphasis and strong emphasis",
        "html": "<p>***<em>foo</em></p>\n",
        "markdown": "****foo*\n",
        "example": 422,
        "start_line": 6883
    },
    {
        "end_line": 6894,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo</strong>*</p>\n",
        "markdown": "**foo***\n",
        "example": 423,
        "start_line": 6890
    },
    {
        "end_line": 6901,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo</em>***</p>\n",
        "markdown": "*foo****\n",
        "example": 424,
        "start_line": 6897
    },
    {
        "end_line": 6911,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo ___</p>\n",
        "markdown": "foo ___\n",
        "example": 425,
        "start_line": 6907
    },
    {
        "end_line": 6918,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo <em>_</em></p>\n",
        "markdown": "foo _\\__\n",
        "example": 426,
        "start_line": 6914
    },
    {
        "end_line": 6925,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo <em>*</em></p>\n",
        "markdown": "foo _*_\n",
        "example": 427,
        "start_line": 6921
    },
    {
        "end_line": 6932,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo _____</p>\n",
        "markdown": "foo _____\n",
        "example": 428,
        "start_line": 6928
    },
    {
        "end_line": 6939,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo <strong>_</strong></p>\n",
        "markdown": "foo __\\___\n",
        "example": 429,
        "start_line": 6935
    },
    {
        "end_line": 6946,
        "section": "Emphasis and strong emphasis",
        "html": "<p>foo <strong>*</strong></p>\n",
        "markdown": "foo __*__\n",
        "example": 430,
        "start_line": 6942
    },
    {
        "end_line": 6953,
        "section": "Emphasis and strong emphasis",
        "html": "<p>_<em>foo</em></p>\n",
        "markdown": "__foo_\n",
        "example": 431,
        "start_line": 6949
    },
    {
        "end_line": 6964,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo</em>_</p>\n",
        "markdown": "_foo__\n",
        "example": 432,
        "start_line": 6960
    },
    {
        "end_line": 6971,
        "section": "Emphasis and strong emphasis",
        "html": "<p>_<strong>foo</strong></p>\n",
        "markdown": "___foo__\n",
        "example": 433,
        "start_line": 6967
    },
    {
        "end_line": 6978,
        "section": "Emphasis and strong emphasis",
        "html": "<p>___<em>foo</em></p>\n",
        "markdown": "____foo_\n",
        "example": 434,
        "start_line": 6974
    },
    {
        "end_line": 6985,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo</strong>_</p>\n",
        "markdown": "__foo___\n",
        "example": 435,
        "start_line": 6981
    },
    {
        "end_line": 6992,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo</em>___</p>\n",
        "markdown": "_foo____\n",
        "example": 436,
        "start_line": 6988
    },
    {
        "end_line": 7002,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo</strong></p>\n",
        "markdown": "**foo**\n",
        "example": 437,
        "start_line": 6998
    },
    {
        "end_line": 7009,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em><em>foo</em></em></p>\n",
        "markdown": "*_foo_*\n",
        "example": 438,
        "start_line": 7005
    },
    {
        "end_line": 7016,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong>foo</strong></p>\n",
        "markdown": "__foo__\n",
        "example": 439,
        "start_line": 7012
    },
    {
        "end_line": 7023,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em><em>foo</em></em></p>\n",
        "markdown": "_*foo*_\n",
        "example": 440,
        "start_line": 7019
    },
    {
        "end_line": 7033,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong><strong>foo</strong></strong></p>\n",
        "markdown": "****foo****\n",
        "example": 441,
        "start_line": 7029
    },
    {
        "end_line": 7040,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong><strong>foo</strong></strong></p>\n",
        "markdown": "____foo____\n",
        "example": 442,
        "start_line": 7036
    },
    {
        "end_line": 7051,
        "section": "Emphasis and strong emphasis",
        "html": "<p><strong><strong><strong>foo</strong></strong></strong></p>\n",
        "markdown": "******foo******\n",
        "example": 443,
        "start_line": 7047
    },
    {
        "end_line": 7060,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em><strong>foo</strong></em></p>\n",
        "markdown": "***foo***\n",
        "example": 444,
        "start_line": 7056
    },
    {
        "end_line": 7067,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em><strong><strong>foo</strong></strong></em></p>\n",
        "markdown": "_____foo_____\n",
        "example": 445,
        "start_line": 7063
    },
    {
        "end_line": 7076,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo _bar</em> baz_</p>\n",
        "markdown": "*foo _bar* baz_\n",
        "example": 446,
        "start_line": 7072
    },
    {
        "end_line": 7083,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>foo <strong>bar *baz bim</strong> bam</em></p>\n",
        "markdown": "*foo __bar *baz bim__ bam*\n",
        "example": 447,
        "start_line": 7079
    },
    {
        "end_line": 7092,
        "section": "Emphasis and strong emphasis",
        "html": "<p>**foo <strong>bar baz</strong></p>\n",
        "markdown": "**foo **bar baz**\n",
        "example": 448,
        "start_line": 7088
    },
    {
        "end_line": 7099,
        "section": "Emphasis and strong emphasis",
        "html": "<p>*foo <em>bar baz</em></p>\n",
        "markdown": "*foo *bar baz*\n",
        "example": 449,
        "start_line": 7095
    },
    {
        "end_line": 7108,
        "section": "Emphasis and strong emphasis",
        "html": "<p>*<a href=\"/url\">bar*</a></p>\n",
        "markdown": "*[bar*](/url)\n",
        "example": 450,
        "start_line": 7104
    },
    {
        "end_line": 7115,
        "section": "Emphasis and strong emphasis",
        "html": "<p>_foo <a href=\"/url\">bar_</a></p>\n",
        "markdown": "_foo [bar_](/url)\n",
        "example": 451,
        "start_line": 7111
    },
    {
        "end_line": 7122,
        "section": "Emphasis and strong emphasis",
        "html": "<p>*<img src=\"foo\" title=\"*\"/></p>\n",
        "markdown": "*<img src=\"foo\" title=\"*\"/>\n",
        "example": 452,
        "start_line": 7118
    },
    {
        "end_line": 7129,
        "section": "Emphasis and strong emphasis",
        "html": "<p>**<a href=\"**\"></p>\n",
        "markdown": "**<a href=\"**\">\n",
        "example": 453,
        "start_line": 7125
    },
    {
        "end_line": 7136,
        "section": "Emphasis and strong emphasis",
        "html": "<p>__<a href=\"__\"></p>\n",
        "markdown": "__<a href=\"__\">\n",
        "example": 454,
        "start_line": 7132
    },
    {
        "end_line": 7143,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>a <code>*</code></em></p>\n",
        "markdown": "*a `*`*\n",
        "example": 455,
        "start_line": 7139
    },
    {
        "end_line": 7150,
        "section": "Emphasis and strong emphasis",
        "html": "<p><em>a <code>_</code></em></p>\n",
        "markdown": "_a `_`_\n",
        "example": 456,
        "start_line": 7146
    },
    {
        "end_line": 7157,
        "section": "Emphasis and strong emphasis",
        "html": "<p>**a<a href=\"http://foo.bar/?q=**\">http://foo.bar/?q=**</a></p>\n",
        "markdown": "**a<http://foo.bar/?q=**>\n",
        "example": 457,
        "start_line": 7153
    },
    {
        "end_line": 7164,
        "section": "Emphasis and strong emphasis",
        "html": "<p>__a<a href=\"http://foo.bar/?q=__\">http://foo.bar/?q=__</a></p>\n",
        "markdown": "__a<http://foo.bar/?q=__>\n",
        "example": 458,
        "start_line": 7160
    },
    {
        "end_line": 7245,
        "section": "Links",
        "html": "<p><a href=\"/uri\" title=\"title\">link</a></p>\n",
        "markdown": "[link](/uri \"title\")\n",
        "example": 459,
        "start_line": 7241
    },
    {
        "end_line": 7254,
        "section": "Links",
        "html": "<p><a href=\"/uri\">link</a></p>\n",
        "markdown": "[link](/uri)\n",
        "example": 460,
        "start_line": 7250
    },
    {
        "end_line": 7263,
        "section": "Links",
        "html": "<p><a href=\"\">link</a></p>\n",
        "markdown": "[link]()\n",
        "example": 461,
        "start_line": 7259
    },
    {
        "end_line": 7270,
        "section": "Links",
        "html": "<p><a href=\"\">link</a></p>\n",
        "markdown": "[link](<>)\n",
        "example": 462,
        "start_line": 7266
    },
    {
        "end_line": 7280,
        "section": "Links",
        "html": "<p>[link](/my uri)</p>\n",
        "markdown": "[link](/my uri)\n",
        "example": 463,
        "start_line": 7276
    },
    {
        "end_line": 7287,
        "section": "Links",
        "html": "<p>[link](&lt;/my uri&gt;)</p>\n",
        "markdown": "[link](</my uri>)\n",
        "example": 464,
        "start_line": 7283
    },
    {
        "end_line": 7296,
        "section": "Links",
        "html": "<p>[link](foo\nbar)</p>\n",
        "markdown": "[link](foo\nbar)\n",
        "example": 465,
        "start_line": 7290
    },
    {
        "end_line": 7305,
        "section": "Links",
        "html": "<p>[link](<foo\nbar>)</p>\n",
        "markdown": "[link](<foo\nbar>)\n",
        "example": 466,
        "start_line": 7299
    },
    {
        "end_line": 7313,
        "section": "Links",
        "html": "<p><a href=\"(foo)\">link</a></p>\n",
        "markdown": "[link](\\(foo\\))\n",
        "example": 467,
        "start_line": 7309
    },
    {
        "end_line": 7322,
        "section": "Links",
        "html": "<p><a href=\"foo(and(bar))\">link</a></p>\n",
        "markdown": "[link](foo(and(bar)))\n",
        "example": 468,
        "start_line": 7318
    },
    {
        "end_line": 7331,
        "section": "Links",
        "html": "<p><a href=\"foo(and(bar)\">link</a></p>\n",
        "markdown": "[link](foo\\(and\\(bar\\))\n",
        "example": 469,
        "start_line": 7327
    },
    {
        "end_line": 7338,
        "section": "Links",
        "html": "<p><a href=\"foo(and(bar)\">link</a></p>\n",
        "markdown": "[link](<foo(and(bar)>)\n",
        "example": 470,
        "start_line": 7334
    },
    {
        "end_line": 7348,
        "section": "Links",
        "html": "<p><a href=\"foo):\">link</a></p>\n",
        "markdown": "[link](foo\\)\\:)\n",
        "example": 471,
        "start_line": 7344
    },
    {
        "end_line": 7363,
        "section": "Links",
        "html": "<p><a href=\"#fragment\">link</a></p>\n<p><a href=\"http://example.com#fragment\">link</a></p>\n<p><a href=\"http://example.com?foo=3#frag\">link</a></p>\n",
        "markdown": "[link](#fragment)\n\n[link](http://example.com#fragment)\n\n[link](http://example.com?foo=3#frag)\n",
        "example": 472,
        "start_line": 7353
    },
    {
        "end_line": 7373,
        "section": "Links",
        "html": "<p><a href=\"foo%5Cbar\">link</a></p>\n",
        "markdown": "[link](foo\\bar)\n",
        "example": 473,
        "start_line": 7369
    },
    {
        "end_line": 7389,
        "section": "Links",
        "html": "<p><a href=\"foo%20b%C3%A4\">link</a></p>\n",
        "markdown": "[link](foo%20b&auml;)\n",
        "example": 474,
        "start_line": 7385
    },
    {
        "end_line": 7400,
        "section": "Links",
        "html": "<p><a href=\"%22title%22\">link</a></p>\n",
        "markdown": "[link](\"title\")\n",
        "example": 475,
        "start_line": 7396
    },
    {
        "end_line": 7413,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title\">link</a>\n<a href=\"/url\" title=\"title\">link</a>\n<a href=\"/url\" title=\"title\">link</a></p>\n",
        "markdown": "[link](/url \"title\")\n[link](/url 'title')\n[link](/url (title))\n",
        "example": 476,
        "start_line": 7405
    },
    {
        "end_line": 7423,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title &quot;&quot;\">link</a></p>\n",
        "markdown": "[link](/url \"title \\\"&quot;\")\n",
        "example": 477,
        "start_line": 7419
    },
    {
        "end_line": 7433,
        "section": "Links",
        "html": "<p><a href=\"/url%C2%A0%22title%22\">link</a></p>\n",
        "markdown": "[link](/url \"title\")\n",
        "example": 478,
        "start_line": 7429
    },
    {
        "end_line": 7442,
        "section": "Links",
        "html": "<p>[link](/url &quot;title &quot;and&quot; title&quot;)</p>\n",
        "markdown": "[link](/url \"title \"and\" title\")\n",
        "example": 479,
        "start_line": 7438
    },
    {
        "end_line": 7451,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title &quot;and&quot; title\">link</a></p>\n",
        "markdown": "[link](/url 'title \"and\" title')\n",
        "example": 480,
        "start_line": 7447
    },
    {
        "end_line": 7476,
        "section": "Links",
        "html": "<p><a href=\"/uri\" title=\"title\">link</a></p>\n",
        "markdown": "[link](   /uri\n  \"title\"  )\n",
        "example": 481,
        "start_line": 7471
    },
    {
        "end_line": 7486,
        "section": "Links",
        "html": "<p>[link] (/uri)</p>\n",
        "markdown": "[link] (/uri)\n",
        "example": 482,
        "start_line": 7482
    },
    {
        "end_line": 7496,
        "section": "Links",
        "html": "<p><a href=\"/uri\">link [foo [bar]]</a></p>\n",
        "markdown": "[link [foo [bar]]](/uri)\n",
        "example": 483,
        "start_line": 7492
    },
    {
        "end_line": 7503,
        "section": "Links",
        "html": "<p>[link] bar](/uri)</p>\n",
        "markdown": "[link] bar](/uri)\n",
        "example": 484,
        "start_line": 7499
    },
    {
        "end_line": 7510,
        "section": "Links",
        "html": "<p>[link <a href=\"/uri\">bar</a></p>\n",
        "markdown": "[link [bar](/uri)\n",
        "example": 485,
        "start_line": 7506
    },
    {
        "end_line": 7517,
        "section": "Links",
        "html": "<p><a href=\"/uri\">link [bar</a></p>\n",
        "markdown": "[link \\[bar](/uri)\n",
        "example": 486,
        "start_line": 7513
    },
    {
        "end_line": 7526,
        "section": "Links",
        "html": "<p><a href=\"/uri\">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n",
        "markdown": "[link *foo **bar** `#`*](/uri)\n",
        "example": 487,
        "start_line": 7522
    },
    {
        "end_line": 7533,
        "section": "Links",
        "html": "<p><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></p>\n",
        "markdown": "[![moon](moon.jpg)](/uri)\n",
        "example": 488,
        "start_line": 7529
    },
    {
        "end_line": 7542,
        "section": "Links",
        "html": "<p>[foo <a href=\"/uri\">bar</a>](/uri)</p>\n",
        "markdown": "[foo [bar](/uri)](/uri)\n",
        "example": 489,
        "start_line": 7538
    },
    {
        "end_line": 7549,
        "section": "Links",
        "html": "<p>[foo <em>[bar <a href=\"/uri\">baz</a>](/uri)</em>](/uri)</p>\n",
        "markdown": "[foo *[bar [baz](/uri)](/uri)*](/uri)\n",
        "example": 490,
        "start_line": 7545
    },
    {
        "end_line": 7556,
        "section": "Links",
        "html": "<p><img src=\"uri3\" alt=\"[foo](uri2)\" /></p>\n",
        "markdown": "![[[foo](uri1)](uri2)](uri3)\n",
        "example": 491,
        "start_line": 7552
    },
    {
        "end_line": 7566,
        "section": "Links",
        "html": "<p>*<a href=\"/uri\">foo*</a></p>\n",
        "markdown": "*[foo*](/uri)\n",
        "example": 492,
        "start_line": 7562
    },
    {
        "end_line": 7573,
        "section": "Links",
        "html": "<p><a href=\"baz*\">foo *bar</a></p>\n",
        "markdown": "[foo *bar](baz*)\n",
        "example": 493,
        "start_line": 7569
    },
    {
        "end_line": 7583,
        "section": "Links",
        "html": "<p><em>foo [bar</em> baz]</p>\n",
        "markdown": "*foo [bar* baz]\n",
        "example": 494,
        "start_line": 7579
    },
    {
        "end_line": 7593,
        "section": "Links",
        "html": "<p>[foo <bar attr=\"](baz)\"></p>\n",
        "markdown": "[foo <bar attr=\"](baz)\">\n",
        "example": 495,
        "start_line": 7589
    },
    {
        "end_line": 7600,
        "section": "Links",
        "html": "<p>[foo<code>](/uri)</code></p>\n",
        "markdown": "[foo`](/uri)`\n",
        "example": 496,
        "start_line": 7596
    },
    {
        "end_line": 7607,
        "section": "Links",
        "html": "<p>[foo<a href=\"http://example.com/?search=%5D(uri)\">http://example.com/?search=](uri)</a></p>\n",
        "markdown": "[foo<http://example.com/?search=](uri)>\n",
        "example": 497,
        "start_line": 7603
    },
    {
        "end_line": 7647,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
        "markdown": "[foo][bar]\n\n[bar]: /url \"title\"\n",
        "example": 498,
        "start_line": 7641
    },
    {
        "end_line": 7662,
        "section": "Links",
        "html": "<p><a href=\"/uri\">link [foo [bar]]</a></p>\n",
        "markdown": "[link [foo [bar]]][ref]\n\n[ref]: /uri\n",
        "example": 499,
        "start_line": 7656
    },
    {
        "end_line": 7671,
        "section": "Links",
        "html": "<p><a href=\"/uri\">link [bar</a></p>\n",
        "markdown": "[link \\[bar][ref]\n\n[ref]: /uri\n",
        "example": 500,
        "start_line": 7665
    },
    {
        "end_line": 7682,
        "section": "Links",
        "html": "<p><a href=\"/uri\">link <em>foo <strong>bar</strong> <code>#</code></em></a></p>\n",
        "markdown": "[link *foo **bar** `#`*][ref]\n\n[ref]: /uri\n",
        "example": 501,
        "start_line": 7676
    },
    {
        "end_line": 7691,
        "section": "Links",
        "html": "<p><a href=\"/uri\"><img src=\"moon.jpg\" alt=\"moon\" /></a></p>\n",
        "markdown": "[![moon](moon.jpg)][ref]\n\n[ref]: /uri\n",
        "example": 502,
        "start_line": 7685
    },
    {
        "end_line": 7702,
        "section": "Links",
        "html": "<p>[foo <a href=\"/uri\">bar</a>]<a href=\"/uri\">ref</a></p>\n",
        "markdown": "[foo [bar](/uri)][ref]\n\n[ref]: /uri\n",
        "example": 503,
        "start_line": 7696
    },
    {
        "end_line": 7711,
        "section": "Links",
        "html": "<p>[foo <em>bar <a href=\"/uri\">baz</a></em>]<a href=\"/uri\">ref</a></p>\n",
        "markdown": "[foo *bar [baz][ref]*][ref]\n\n[ref]: /uri\n",
        "example": 504,
        "start_line": 7705
    },
    {
        "end_line": 7726,
        "section": "Links",
        "html": "<p>*<a href=\"/uri\">foo*</a></p>\n",
        "markdown": "*[foo*][ref]\n\n[ref]: /uri\n",
        "example": 505,
        "start_line": 7720
    },
    {
        "end_line": 7735,
        "section": "Links",
        "html": "<p><a href=\"/uri\">foo *bar</a></p>\n",
        "markdown": "[foo *bar][ref]\n\n[ref]: /uri\n",
        "example": 506,
        "start_line": 7729
    },
    {
        "end_line": 7747,
        "section": "Links",
        "html": "<p>[foo <bar attr=\"][ref]\"></p>\n",
        "markdown": "[foo <bar attr=\"][ref]\">\n\n[ref]: /uri\n",
        "example": 507,
        "start_line": 7741
    },
    {
        "end_line": 7756,
        "section": "Links",
        "html": "<p>[foo<code>][ref]</code></p>\n",
        "markdown": "[foo`][ref]`\n\n[ref]: /uri\n",
        "example": 508,
        "start_line": 7750
    },
    {
        "end_line": 7765,
        "section": "Links",
        "html": "<p>[foo<a href=\"http://example.com/?search=%5D%5Bref%5D\">http://example.com/?search=][ref]</a></p>\n",
        "markdown": "[foo<http://example.com/?search=][ref]>\n\n[ref]: /uri\n",
        "example": 509,
        "start_line": 7759
    },
    {
        "end_line": 7776,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
        "markdown": "[foo][BaR]\n\n[bar]: /url \"title\"\n",
        "example": 510,
        "start_line": 7770
    },
    {
        "end_line": 7787,
        "section": "Links",
        "html": "<p><a href=\"/url\">Толпой</a> is a Russian word.</p>\n",
        "markdown": "[Толпой][Толпой] is a Russian word.\n\n[ТОЛПОЙ]: /url\n",
        "example": 511,
        "start_line": 7781
    },
    {
        "end_line": 7800,
        "section": "Links",
        "html": "<p><a href=\"/url\">Baz</a></p>\n",
        "markdown": "[Foo\n  bar]: /url\n\n[Baz][Foo bar]\n",
        "example": 512,
        "start_line": 7793
    },
    {
        "end_line": 7812,
        "section": "Links",
        "html": "<p>[foo] <a href=\"/url\" title=\"title\">bar</a></p>\n",
        "markdown": "[foo] [bar]\n\n[bar]: /url \"title\"\n",
        "example": 513,
        "start_line": 7806
    },
    {
        "end_line": 7823,
        "section": "Links",
        "html": "<p>[foo]\n<a href=\"/url\" title=\"title\">bar</a></p>\n",
        "markdown": "[foo]\n[bar]\n\n[bar]: /url \"title\"\n",
        "example": 514,
        "start_line": 7815
    },
    {
        "end_line": 7864,
        "section": "Links",
        "html": "<p><a href=\"/url1\">bar</a></p>\n",
        "markdown": "[foo]: /url1\n\n[foo]: /url2\n\n[bar][foo]\n",
        "example": 515,
        "start_line": 7856
    },
    {
        "end_line": 7877,
        "section": "Links",
        "html": "<p>[bar][foo!]</p>\n",
        "markdown": "[bar][foo\\!]\n\n[foo!]: /url\n",
        "example": 516,
        "start_line": 7871
    },
    {
        "end_line": 7890,
        "section": "Links",
        "html": "<p>[foo][ref[]</p>\n<p>[ref[]: /uri</p>\n",
        "markdown": "[foo][ref[]\n\n[ref[]: /uri\n",
        "example": 517,
        "start_line": 7883
    },
    {
        "end_line": 7900,
        "section": "Links",
        "html": "<p>[foo][ref[bar]]</p>\n<p>[ref[bar]]: /uri</p>\n",
        "markdown": "[foo][ref[bar]]\n\n[ref[bar]]: /uri\n",
        "example": 518,
        "start_line": 7893
    },
    {
        "end_line": 7910,
        "section": "Links",
        "html": "<p>[[[foo]]]</p>\n<p>[[[foo]]]: /url</p>\n",
        "markdown": "[[[foo]]]\n\n[[[foo]]]: /url\n",
        "example": 519,
        "start_line": 7903
    },
    {
        "end_line": 7919,
        "section": "Links",
        "html": "<p><a href=\"/uri\">foo</a></p>\n",
        "markdown": "[foo][ref\\[]\n\n[ref\\[]: /uri\n",
        "example": 520,
        "start_line": 7913
    },
    {
        "end_line": 7930,
        "section": "Links",
        "html": "<p><a href=\"/uri\">bar\\</a></p>\n",
        "markdown": "[bar\\\\]: /uri\n\n[bar\\\\]\n",
        "example": 521,
        "start_line": 7924
    },
    {
        "end_line": 7942,
        "section": "Links",
        "html": "<p>[]</p>\n<p>[]: /uri</p>\n",
        "markdown": "[]\n\n[]: /uri\n",
        "example": 522,
        "start_line": 7935
    },
    {
        "end_line": 7956,
        "section": "Links",
        "html": "<p>[\n]</p>\n<p>[\n]: /uri</p>\n",
        "markdown": "[\n ]\n\n[\n ]: /uri\n",
        "example": 523,
        "start_line": 7945
    },
    {
        "end_line": 7974,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
        "markdown": "[foo][]\n\n[foo]: /url \"title\"\n",
        "example": 524,
        "start_line": 7968
    },
    {
        "end_line": 7983,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title\"><em>foo</em> bar</a></p>\n",
        "markdown": "[*foo* bar][]\n\n[*foo* bar]: /url \"title\"\n",
        "example": 525,
        "start_line": 7977
    },
    {
        "end_line": 7994,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title\">Foo</a></p>\n",
        "markdown": "[Foo][]\n\n[foo]: /url \"title\"\n",
        "example": 526,
        "start_line": 7988
    },
    {
        "end_line": 8009,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title\">foo</a>\n[]</p>\n",
        "markdown": "[foo] \n[]\n\n[foo]: /url \"title\"\n",
        "example": 527,
        "start_line": 8001
    },
    {
        "end_line": 8027,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title\">foo</a></p>\n",
        "markdown": "[foo]\n\n[foo]: /url \"title\"\n",
        "example": 528,
        "start_line": 8021
    },
    {
        "end_line": 8036,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title\"><em>foo</em> bar</a></p>\n",
        "markdown": "[*foo* bar]\n\n[*foo* bar]: /url \"title\"\n",
        "example": 529,
        "start_line": 8030
    },
    {
        "end_line": 8045,
        "section": "Links",
        "html": "<p>[<a href=\"/url\" title=\"title\"><em>foo</em> bar</a>]</p>\n",
        "markdown": "[[*foo* bar]]\n\n[*foo* bar]: /url \"title\"\n",
        "example": 530,
        "start_line": 8039
    },
    {
        "end_line": 8054,
        "section": "Links",
        "html": "<p>[[bar <a href=\"/url\">foo</a></p>\n",
        "markdown": "[[bar [foo]\n\n[foo]: /url\n",
        "example": 531,
        "start_line": 8048
    },
    {
        "end_line": 8065,
        "section": "Links",
        "html": "<p><a href=\"/url\" title=\"title\">Foo</a></p>\n",
        "markdown": "[Foo]\n\n[foo]: /url \"title\"\n",
        "example": 532,
        "start_line": 8059
    },
    {
        "end_line": 8076,
        "section": "Links",
        "html": "<p><a href=\"/url\">foo</a> bar</p>\n",
        "markdown": "[foo] bar\n\n[foo]: /url\n",
        "example": 533,
        "start_line": 8070
    },
    {
        "end_line": 8088,
        "section": "Links",
        "html": "<p>[foo]</p>\n",
        "markdown": "\\[foo]\n\n[foo]: /url \"title\"\n",
        "example": 534,
        "start_line": 8082
    },
    {
        "end_line": 8100,
        "section": "Links",
        "html": "<p>*<a href=\"/url\">foo*</a></p>\n",
        "markdown": "[foo*]: /url\n\n*[foo*]\n",
        "example": 535,
        "start_line": 8094
    },
    {
        "end_line": 8113,
        "section": "Links",
        "html": "<p><a href=\"/url2\">foo</a></p>\n",
        "markdown": "[foo][bar]\n\n[foo]: /url1\n[bar]: /url2\n",
        "example": 536,
        "start_line": 8106
    },
    {
        "end_line": 8121,
        "section": "Links",
        "html": "<p><a href=\"/url1\">foo</a></p>\n",
        "markdown": "[foo][]\n\n[foo]: /url1\n",
        "example": 537,
        "start_line": 8115
    },
    {
        "end_line": 8131,
        "section": "Links",
        "html": "<p><a href=\"\">foo</a></p>\n",
        "markdown": "[foo]()\n\n[foo]: /url1\n",
        "example": 538,
        "start_line": 8125
    },
    {
        "end_line": 8139,
        "section": "Links",
        "html": "<p><a href=\"/url1\">foo</a>(not a link)</p>\n",
        "markdown": "[foo](not a link)\n\n[foo]: /url1\n",
        "example": 539,
        "start_line": 8133
    },
    {
        "end_line": 8150,
        "section": "Links",
        "html": "<p>[foo]<a href=\"/url\">bar</a></p>\n",
        "markdown": "[foo][bar][baz]\n\n[baz]: /url\n",
        "example": 540,
        "start_line": 8144
    },
    {
        "end_line": 8163,
        "section": "Links",
        "html": "<p><a href=\"/url2\">foo</a><a href=\"/url1\">baz</a></p>\n",
        "markdown": "[foo][bar][baz]\n\n[baz]: /url1\n[bar]: /url2\n",
        "example": 541,
        "start_line": 8156
    },
    {
        "end_line": 8176,
        "section": "Links",
        "html": "<p>[foo]<a href=\"/url1\">bar</a></p>\n",
        "markdown": "[foo][bar][baz]\n\n[baz]: /url1\n[foo]: /url2\n",
        "example": 542,
        "start_line": 8169
    },
    {
        "end_line": 8196,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
        "markdown": "![foo](/url \"title\")\n",
        "example": 543,
        "start_line": 8192
    },
    {
        "end_line": 8205,
        "section": "Images",
        "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
        "markdown": "![foo *bar*]\n\n[foo *bar*]: train.jpg \"train & tracks\"\n",
        "example": 544,
        "start_line": 8199
    },
    {
        "end_line": 8212,
        "section": "Images",
        "html": "<p><img src=\"/url2\" alt=\"foo bar\" /></p>\n",
        "markdown": "![foo ![bar](/url)](/url2)\n",
        "example": 545,
        "start_line": 8208
    },
    {
        "end_line": 8219,
        "section": "Images",
        "html": "<p><img src=\"/url2\" alt=\"foo bar\" /></p>\n",
        "markdown": "![foo [bar](/url)](/url2)\n",
        "example": 546,
        "start_line": 8215
    },
    {
        "end_line": 8235,
        "section": "Images",
        "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
        "markdown": "![foo *bar*][]\n\n[foo *bar*]: train.jpg \"train & tracks\"\n",
        "example": 547,
        "start_line": 8229
    },
    {
        "end_line": 8244,
        "section": "Images",
        "html": "<p><img src=\"train.jpg\" alt=\"foo bar\" title=\"train &amp; tracks\" /></p>\n",
        "markdown": "![foo *bar*][foobar]\n\n[FOOBAR]: train.jpg \"train & tracks\"\n",
        "example": 548,
        "start_line": 8238
    },
    {
        "end_line": 8251,
        "section": "Images",
        "html": "<p><img src=\"train.jpg\" alt=\"foo\" /></p>\n",
        "markdown": "![foo](train.jpg)\n",
        "example": 549,
        "start_line": 8247
    },
    {
        "end_line": 8258,
        "section": "Images",
        "html": "<p>My <img src=\"/path/to/train.jpg\" alt=\"foo bar\" title=\"title\" /></p>\n",
        "markdown": "My ![foo bar](/path/to/train.jpg  \"title\"   )\n",
        "example": 550,
        "start_line": 8254
    },
    {
        "end_line": 8265,
        "section": "Images",
        "html": "<p><img src=\"url\" alt=\"foo\" /></p>\n",
        "markdown": "![foo](<url>)\n",
        "example": 551,
        "start_line": 8261
    },
    {
        "end_line": 8272,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"\" /></p>\n",
        "markdown": "![](/url)\n",
        "example": 552,
        "start_line": 8268
    },
    {
        "end_line": 8283,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"foo\" /></p>\n",
        "markdown": "![foo][bar]\n\n[bar]: /url\n",
        "example": 553,
        "start_line": 8277
    },
    {
        "end_line": 8292,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"foo\" /></p>\n",
        "markdown": "![foo][bar]\n\n[BAR]: /url\n",
        "example": 554,
        "start_line": 8286
    },
    {
        "end_line": 8303,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
        "markdown": "![foo][]\n\n[foo]: /url \"title\"\n",
        "example": 555,
        "start_line": 8297
    },
    {
        "end_line": 8312,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"foo bar\" title=\"title\" /></p>\n",
        "markdown": "![*foo* bar][]\n\n[*foo* bar]: /url \"title\"\n",
        "example": 556,
        "start_line": 8306
    },
    {
        "end_line": 8323,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"Foo\" title=\"title\" /></p>\n",
        "markdown": "![Foo][]\n\n[foo]: /url \"title\"\n",
        "example": 557,
        "start_line": 8317
    },
    {
        "end_line": 8337,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" />\n[]</p>\n",
        "markdown": "![foo] \n[]\n\n[foo]: /url \"title\"\n",
        "example": 558,
        "start_line": 8329
    },
    {
        "end_line": 8348,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"foo\" title=\"title\" /></p>\n",
        "markdown": "![foo]\n\n[foo]: /url \"title\"\n",
        "example": 559,
        "start_line": 8342
    },
    {
        "end_line": 8357,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"foo bar\" title=\"title\" /></p>\n",
        "markdown": "![*foo* bar]\n\n[*foo* bar]: /url \"title\"\n",
        "example": 560,
        "start_line": 8351
    },
    {
        "end_line": 8369,
        "section": "Images",
        "html": "<p>![[foo]]</p>\n<p>[[foo]]: /url &quot;title&quot;</p>\n",
        "markdown": "![[foo]]\n\n[[foo]]: /url \"title\"\n",
        "example": 561,
        "start_line": 8362
    },
    {
        "end_line": 8380,
        "section": "Images",
        "html": "<p><img src=\"/url\" alt=\"Foo\" title=\"title\" /></p>\n",
        "markdown": "![Foo]\n\n[foo]: /url \"title\"\n",
        "example": 562,
        "start_line": 8374
    },
    {
        "end_line": 8392,
        "section": "Images",
        "html": "<p>![foo]</p>\n",
        "markdown": "!\\[foo]\n\n[foo]: /url \"title\"\n",
        "example": 563,
        "start_line": 8386
    },
    {
        "end_line": 8404,
        "section": "Images",
        "html": "<p>!<a href=\"/url\" title=\"title\">foo</a></p>\n",
        "markdown": "\\![foo]\n\n[foo]: /url \"title\"\n",
        "example": 564,
        "start_line": 8398
    },
    {
        "end_line": 8435,
        "section": "Autolinks",
        "html": "<p><a href=\"http://foo.bar.baz\">http://foo.bar.baz</a></p>\n",
        "markdown": "<http://foo.bar.baz>\n",
        "example": 565,
        "start_line": 8431
    },
    {
        "end_line": 8442,
        "section": "Autolinks",
        "html": "<p><a href=\"http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean\">http://foo.bar.baz/test?q=hello&amp;id=22&amp;boolean</a></p>\n",
        "markdown": "<http://foo.bar.baz/test?q=hello&id=22&boolean>\n",
        "example": 566,
        "start_line": 8438
    },
    {
        "end_line": 8449,
        "section": "Autolinks",
        "html": "<p><a href=\"irc://foo.bar:2233/baz\">irc://foo.bar:2233/baz</a></p>\n",
        "markdown": "<irc://foo.bar:2233/baz>\n",
        "example": 567,
        "start_line": 8445
    },
    {
        "end_line": 8458,
        "section": "Autolinks",
        "html": "<p><a href=\"MAILTO:FOO@BAR.BAZ\">MAILTO:FOO@BAR.BAZ</a></p>\n",
        "markdown": "<MAILTO:FOO@BAR.BAZ>\n",
        "example": 568,
        "start_line": 8454
    },
    {
        "end_line": 8470,
        "section": "Autolinks",
        "html": "<p><a href=\"a+b+c:d\">a+b+c:d</a></p>\n",
        "markdown": "<a+b+c:d>\n",
        "example": 569,
        "start_line": 8466
    },
    {
        "end_line": 8477,
        "section": "Autolinks",
        "html": "<p><a href=\"made-up-scheme://foo,bar\">made-up-scheme://foo,bar</a></p>\n",
        "markdown": "<made-up-scheme://foo,bar>\n",
        "example": 570,
        "start_line": 8473
    },
    {
        "end_line": 8484,
        "section": "Autolinks",
        "html": "<p><a href=\"http://../\">http://../</a></p>\n",
        "markdown": "<http://../>\n",
        "example": 571,
        "start_line": 8480
    },
    {
        "end_line": 8491,
        "section": "Autolinks",
        "html": "<p><a href=\"localhost:5001/foo\">localhost:5001/foo</a></p>\n",
        "markdown": "<localhost:5001/foo>\n",
        "example": 572,
        "start_line": 8487
    },
    {
        "end_line": 8500,
        "section": "Autolinks",
        "html": "<p>&lt;http://foo.bar/baz bim&gt;</p>\n",
        "markdown": "<http://foo.bar/baz bim>\n",
        "example": 573,
        "start_line": 8496
    },
    {
        "end_line": 8509,
        "section": "Autolinks",
        "html": "<p><a href=\"http://example.com/%5C%5B%5C\">http://example.com/\\[\\</a></p>\n",
        "markdown": "<http://example.com/\\[\\>\n",
        "example": 574,
        "start_line": 8505
    },
    {
        "end_line": 8531,
        "section": "Autolinks",
        "html": "<p><a href=\"mailto:foo@bar.example.com\">foo@bar.example.com</a></p>\n",
        "markdown": "<foo@bar.example.com>\n",
        "example": 575,
        "start_line": 8527
    },
    {
        "end_line": 8538,
        "section": "Autolinks",
        "html": "<p><a href=\"mailto:foo+special@Bar.baz-bar0.com\">foo+special@Bar.baz-bar0.com</a></p>\n",
        "markdown": "<foo+special@Bar.baz-bar0.com>\n",
        "example": 576,
        "start_line": 8534
    },
    {
        "end_line": 8547,
        "section": "Autolinks",
        "html": "<p>&lt;foo+@bar.example.com&gt;</p>\n",
        "markdown": "<foo\\+@bar.example.com>\n",
        "example": 577,
        "start_line": 8543
    },
    {
        "end_line": 8556,
        "section": "Autolinks",
        "html": "<p>&lt;&gt;</p>\n",
        "markdown": "<>\n",
        "example": 578,
        "start_line": 8552
    },
    {
        "end_line": 8563,
        "section": "Autolinks",
        "html": "<p>&lt; http://foo.bar &gt;</p>\n",
        "markdown": "< http://foo.bar >\n",
        "example": 579,
        "start_line": 8559
    },
    {
        "end_line": 8570,
        "section": "Autolinks",
        "html": "<p>&lt;m:abc&gt;</p>\n",
        "markdown": "<m:abc>\n",
        "example": 580,
        "start_line": 8566
    },
    {
        "end_line": 8577,
        "section": "Autolinks",
        "html": "<p>&lt;foo.bar.baz&gt;</p>\n",
        "markdown": "<foo.bar.baz>\n",
        "example": 581,
        "start_line": 8573
    },
    {
        "end_line": 8584,
        "section": "Autolinks",
        "html": "<p>http://example.com</p>\n",
        "markdown": "http://example.com\n",
        "example": 582,
        "start_line": 8580
    },
    {
        "end_line": 8591,
        "section": "Autolinks",
        "html": "<p>foo@bar.example.com</p>\n",
        "markdown": "foo@bar.example.com\n",
        "example": 583,
        "start_line": 8587
    },
    {
        "end_line": 8673,
        "section": "Raw HTML",
        "html": "<p><a><bab><c2c></p>\n",
        "markdown": "<a><bab><c2c>\n",
        "example": 584,
        "start_line": 8669
    },
    {
        "end_line": 8682,
        "section": "Raw HTML",
        "html": "<p><a/><b2/></p>\n",
        "markdown": "<a/><b2/>\n",
        "example": 585,
        "start_line": 8678
    },
    {
        "end_line": 8693,
        "section": "Raw HTML",
        "html": "<p><a  /><b2\ndata=\"foo\" ></p>\n",
        "markdown": "<a  /><b2\ndata=\"foo\" >\n",
        "example": 586,
        "start_line": 8687
    },
    {
        "end_line": 8704,
        "section": "Raw HTML",
        "html": "<p><a foo=\"bar\" bam = 'baz <em>\"</em>'\n_boolean zoop:33=zoop:33 /></p>\n",
        "markdown": "<a foo=\"bar\" bam = 'baz <em>\"</em>'\n_boolean zoop:33=zoop:33 />\n",
        "example": 587,
        "start_line": 8698
    },
    {
        "end_line": 8713,
        "section": "Raw HTML",
        "html": "<p>Foo <responsive-image src=\"foo.jpg\" /></p>\n",
        "markdown": "Foo <responsive-image src=\"foo.jpg\" />\n",
        "example": 588,
        "start_line": 8709
    },
    {
        "end_line": 8722,
        "section": "Raw HTML",
        "html": "<p>&lt;33&gt; &lt;__&gt;</p>\n",
        "markdown": "<33> <__>\n",
        "example": 589,
        "start_line": 8718
    },
    {
        "end_line": 8731,
        "section": "Raw HTML",
        "html": "<p>&lt;a h*#ref=&quot;hi&quot;&gt;</p>\n",
        "markdown": "<a h*#ref=\"hi\">\n",
        "example": 590,
        "start_line": 8727
    },
    {
        "end_line": 8740,
        "section": "Raw HTML",
        "html": "<p>&lt;a href=&quot;hi'&gt; &lt;a href=hi'&gt;</p>\n",
        "markdown": "<a href=\"hi'> <a href=hi'>\n",
        "example": 591,
        "start_line": 8736
    },
    {
        "end_line": 8751,
        "section": "Raw HTML",
        "html": "<p>&lt; a&gt;&lt;\nfoo&gt;&lt;bar/ &gt;</p>\n",
        "markdown": "< a><\nfoo><bar/ >\n",
        "example": 592,
        "start_line": 8745
    },
    {
        "end_line": 8760,
        "section": "Raw HTML",
        "html": "<p>&lt;a href='bar'title=title&gt;</p>\n",
        "markdown": "<a href='bar'title=title>\n",
        "example": 593,
        "start_line": 8756
    },
    {
        "end_line": 8769,
        "section": "Raw HTML",
        "html": "<p></a></foo ></p>\n",
        "markdown": "</a></foo >\n",
        "example": 594,
        "start_line": 8765
    },
    {
        "end_line": 8778,
        "section": "Raw HTML",
        "html": "<p>&lt;/a href=&quot;foo&quot;&gt;</p>\n",
        "markdown": "</a href=\"foo\">\n",
        "example": 595,
        "start_line": 8774
    },
    {
        "end_line": 8789,
        "section": "Raw HTML",
        "html": "<p>foo <!-- this is a\ncomment - with hyphen --></p>\n",
        "markdown": "foo <!-- this is a\ncomment - with hyphen -->\n",
        "example": 596,
        "start_line": 8783
    },
    {
        "end_line": 8796,
        "section": "Raw HTML",
        "html": "<p>foo &lt;!-- not a comment -- two hyphens --&gt;</p>\n",
        "markdown": "foo <!-- not a comment -- two hyphens -->\n",
        "example": 597,
        "start_line": 8792
    },
    {
        "end_line": 8808,
        "section": "Raw HTML",
        "html": "<p>foo &lt;!--&gt; foo --&gt;</p>\n<p>foo &lt;!-- foo---&gt;</p>\n",
        "markdown": "foo <!--> foo -->\n\nfoo <!-- foo--->\n",
        "example": 598,
        "start_line": 8801
    },
    {
        "end_line": 8817,
        "section": "Raw HTML",
        "html": "<p>foo <?php echo $a; ?></p>\n",
        "markdown": "foo <?php echo $a; ?>\n",
        "example": 599,
        "start_line": 8813
    },
    {
        "end_line": 8826,
        "section": "Raw HTML",
        "html": "<p>foo <!ELEMENT br EMPTY></p>\n",
        "markdown": "foo <!ELEMENT br EMPTY>\n",
        "example": 600,
        "start_line": 8822
    },
    {
        "end_line": 8835,
        "section": "Raw HTML",
        "html": "<p>foo <![CDATA[>&<]]></p>\n",
        "markdown": "foo <![CDATA[>&<]]>\n",
        "example": 601,
        "start_line": 8831
    },
    {
        "end_line": 8845,
        "section": "Raw HTML",
        "html": "<p>foo <a href=\"&ouml;\"></p>\n",
        "markdown": "foo <a href=\"&ouml;\">\n",
        "example": 602,
        "start_line": 8841
    },
    {
        "end_line": 8854,
        "section": "Raw HTML",
        "html": "<p>foo <a href=\"\\*\"></p>\n",
        "markdown": "foo <a href=\"\\*\">\n",
        "example": 603,
        "start_line": 8850
    },
    {
        "end_line": 8861,
        "section": "Raw HTML",
        "html": "<p>&lt;a href=&quot;&quot;&quot;&gt;</p>\n",
        "markdown": "<a href=\"\\\"\">\n",
        "example": 604,
        "start_line": 8857
    },
    {
        "end_line": 8877,
        "section": "Hard line breaks",
        "html": "<p>foo<br />\nbaz</p>\n",
        "markdown": "foo  \nbaz\n",
        "example": 605,
        "start_line": 8871
    },
    {
        "end_line": 8889,
        "section": "Hard line breaks",
        "html": "<p>foo<br />\nbaz</p>\n",
        "markdown": "foo\\\nbaz\n",
        "example": 606,
        "start_line": 8883
    },
    {
        "end_line": 8900,
        "section": "Hard line breaks",
        "html": "<p>foo<br />\nbaz</p>\n",
        "markdown": "foo       \nbaz\n",
        "example": 607,
        "start_line": 8894
    },
    {
        "end_line": 8911,
        "section": "Hard line breaks",
        "html": "<p>foo<br />\nbar</p>\n",
        "markdown": "foo  \n     bar\n",
        "example": 608,
        "start_line": 8905
    },
    {
        "end_line": 8920,
        "section": "Hard line breaks",
        "html": "<p>foo<br />\nbar</p>\n",
        "markdown": "foo\\\n     bar\n",
        "example": 609,
        "start_line": 8914
    },
    {
        "end_line": 8932,
        "section": "Hard line breaks",
        "html": "<p><em>foo<br />\nbar</em></p>\n",
        "markdown": "*foo  \nbar*\n",
        "example": 610,
        "start_line": 8926
    },
    {
        "end_line": 8941,
        "section": "Hard line breaks",
        "html": "<p><em>foo<br />\nbar</em></p>\n",
        "markdown": "*foo\\\nbar*\n",
        "example": 611,
        "start_line": 8935
    },
    {
        "end_line": 8951,
        "section": "Hard line breaks",
        "html": "<p><code>code span</code></p>\n",
        "markdown": "`code  \nspan`\n",
        "example": 612,
        "start_line": 8946
    },
    {
        "end_line": 8959,
        "section": "Hard line breaks",
        "html": "<p><code>code\\ span</code></p>\n",
        "markdown": "`code\\\nspan`\n",
        "example": 613,
        "start_line": 8954
    },
    {
        "end_line": 8970,
        "section": "Hard line breaks",
        "html": "<p><a href=\"foo  \nbar\"></p>\n",
        "markdown": "<a href=\"foo  \nbar\">\n",
        "example": 614,
        "start_line": 8964
    },
    {
        "end_line": 8979,
        "section": "Hard line breaks",
        "html": "<p><a href=\"foo\\\nbar\"></p>\n",
        "markdown": "<a href=\"foo\\\nbar\">\n",
        "example": 615,
        "start_line": 8973
    },
    {
        "end_line": 8990,
        "section": "Hard line breaks",
        "html": "<p>foo\\</p>\n",
        "markdown": "foo\\\n",
        "example": 616,
        "start_line": 8986
    },
    {
        "end_line": 8997,
        "section": "Hard line breaks",
        "html": "<p>foo</p>\n",
        "markdown": "foo  \n",
        "example": 617,
        "start_line": 8993
    },
    {
        "end_line": 9004,
        "section": "Hard line breaks",
        "html": "<h3>foo\\</h3>\n",
        "markdown": "### foo\\\n",
        "example": 618,
        "start_line": 9000
    },
    {
        "end_line": 9011,
        "section": "Hard line breaks",
        "html": "<h3>foo</h3>\n",
        "markdown": "### foo  \n",
        "example": 619,
        "start_line": 9007
    },
    {
        "end_line": 9028,
        "section": "Soft line breaks",
        "html": "<p>foo\nbaz</p>\n",
        "markdown": "foo\nbaz\n",
        "example": 620,
        "start_line": 9022
    },
    {
        "end_line": 9040,
        "section": "Soft line breaks",
        "html": "<p>foo\nbaz</p>\n",
        "markdown": "foo \n baz\n",
        "example": 621,
        "start_line": 9034
    },
    {
        "end_line": 9058,
        "section": "Textual content",
        "html": "<p>hello $.;'there</p>\n",
        "markdown": "hello $.;'there\n",
        "example": 622,
        "start_line": 9054
    },
    {
        "end_line": 9065,
        "section": "Textual content",
        "html": "<p>Foo χρῆν</p>\n",
        "markdown": "Foo χρῆν\n",
        "example": 623,
        "start_line": 9061
    },
    {
        "end_line": 9074,
        "section": "Textual content",
        "html": "<p>Multiple     spaces</p>\n",
        "markdown": "Multiple     spaces\n",
        "example": 624,
        "start_line": 9070
    }
]