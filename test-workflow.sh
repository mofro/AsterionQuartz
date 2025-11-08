#!/bin/bash
set -e  # Exit on error

# Create a test directory
TEST_DIR="test-workflow"
mkdir -p "$TEST_DIR"
cd "$TEST_DIR"

# Create a test HTML file
cat > index.html << 'HTML'
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    Test content
</body>
</html>
HTML

# Test the sed command
echo "Testing HTML update..."
sed -i.bak 's|</head>|  <link href="/css/main.css" rel="stylesheet" />\n  <link href="/css/custom.css" rel="stylesheet" />\n  <link href="/css/custom-snippet.css" rel="stylesheet" />\n</head>|' index.html

# Show the result
echo "Updated index.html:"
cat index.html

# Clean up
cd ..
rm -rf "$TEST_DIR"
echo "Test completed successfully"
