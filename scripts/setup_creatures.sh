#!/bin/bash

# Navigate to the obsidian directory
cd "$(dirname "$0")/../obsidian" || exit 1

# Create main directories
mkdir -p creatures/{beasts,monstrosities,undead,_templates}

# Create the creature template
cat > creatures/_templates/creature.md << 'EOL'
---
title: "{{NAME}}"
type: "creature"
creature_type: "{{BEAST|MONSTROSITY|UNDEAD|etc.}}"
size: "{{SIZE}}"
status: "alive | deceased | unknown"
habitat: "{{HABITAT}}"
aliases: []
tags: ["creature", "{{creature_type}}", "habitat/{{habitat|lower}}", "size/{{size|lower}}"]
created: {{date}}
updated: {{date}}
---

# {{title}}

## Description
Physical appearance and notable features

## Behavior
Typical behavior and temperament

## Habitat
Where this creature is typically found

## Interactions
How this creature interacts with others

## Related Creatures
- [[Related Creature 1]]
- [[Related Creature 2]]
EOL

echo "Creature template and directory structure created successfully!"
