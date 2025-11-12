---
title: "{{NAME}}"
type: "location"
subtype: "dungeon"
dangers: ""  # e.g., "traps, monsters, environmental"
creator: ""  # who built it
current_occupants: []
tags: ["location", "dungeon"]
created: {{date}}
updated: {{date}}
---

# {{title}}

## Description
Overview and first impressions

## Key Areas
1. **Area 1**:
   - Description
   - Encounters
   - Treasure

## Hazards
- **Traps**:
- **Environmental Dangers**:
- **Monsters**:

## History
Why was this place built? What happened here?

## Maps
```dataview
LIST FROM #map WHERE contains(locations, this.file.link)
```
