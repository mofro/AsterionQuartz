#!/bin/bash
set -e

# Create test directory structure
mkdir -p test-styles

# Create a test SCSS file
cat > test-styles/test.scss << 'EOL'
// Test SCSS file
@use "@jackyzha0/quartz/src/styles/base";

body {
  background-color: base.$light-bg;
  color: base.$dark;
  max-width: 1400px;
  margin: 0 auto;
}
EOL

# Test SCSS compilation
echo "Testing SCSS compilation..."
cd /Users/mo/Code/AsterionQuartz
sass --load-path=node_modules/@jackyzha0/quartz test-styles/test.scss test-styles/output.css

# Check if compilation was successful
if [ $? -eq 0 ]; then
    echo "✅ SCSS compilation successful!"
    echo "Output file created at test-styles/output.css"
    echo "\nCompiled CSS:"
    cat ../../test-styles/output.css
else
    echo "❌ SCSS compilation failed"
    exit 1
fi
