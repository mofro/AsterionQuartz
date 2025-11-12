---
title: "{{NAME}}"
type: "character"
subtype: "npc"
race: "{{RACE}}"
occupation: "{{OCCUPATION}}"
affiliations: []
relationships: {}
status: "alive"  # alive, deceased, missing
importance: "minor"  # minor, recurring, major
tags: ["character", "npc"]
created: {{date}}
updated: {{date}}
---

# {{title}}

## Description
Physical appearance and notable traits

## Role
How this NPC fits into the world

## Background
Key history and motivations

## Relationships
- **Allies**:
- **Enemies**:
- **Connections**:

## Appearances
```dataview
LIST FROM #session WHERE contains(mentioned, this.file.link)
SORT date DESC
```
