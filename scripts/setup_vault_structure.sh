#!/bin/bash

# Navigate to the obsidian directory
cd "$(dirname "$0")/../obsidian" || exit 1

# Create all directories from the plan
mkdir -p _notes
mkdir -p _templates
mkdir -p characters/{_templates,pcs,npcs,antagonists,companions,organizations}
mkdir -p locations/{cities,dungeons,landmarks,regions,towns}
mkdir -p items/{artifacts,magic,mundane}
mkdir -p logs/sessions
mkdir -p rules

# Create the creatures directory structure we already discussed
mkdir -p creatures/{beasts,monstrosities,undead,_templates}

# Create a .gitkeep file in each directory to ensure they're tracked by git
find . -type d -exec touch {}/.gitkeep \;

# Create a README.md in each directory to explain its purpose
cat > _notes/README.md << 'EOL'
# Development Notes

This directory contains development-related notes, design documents, and work-in-progress content.
EOL

cat > _templates/README.md << 'EOL'
# Templates

This directory contains templates for various note types. Use these as starting points for new notes.
EOL

cat > rules/README.md << 'EOL'
# Game Rules

This directory contains game mechanics, house rules, and reference materials.
EOL

echo "Vault directory structure created successfully!"
echo "Next steps:"
echo "1. Move existing content to the appropriate directories"
echo "2. Set up templates in _templates/"
echo "3. Update links and references"
