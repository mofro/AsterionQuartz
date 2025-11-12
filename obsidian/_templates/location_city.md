---
title: "{{NAME}}"
type: "location"
subtype: "city"
population: ""
government: ""
notable_figures: []
tags: ["location", "settlement", "city"]
created: {{date}}
updated: {{date}}
---

# {{title}}

## Overview
Brief description and first impressions

## Government
- **Ruler**: 
- **Laws**: 
- **Defenses**:

## Districts
1. **District 1**:
   - Description
   - Notable Locations

## Important NPCs
- [[NPC 1]]: Role
- [[NPC 2]]: Role

## History
```dataview
TABLE date, event FROM #history WHERE contains(locations, this.file.link)
SORT date DESC
```
