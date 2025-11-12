---
title: "{{TIMELINE_NAME}}"
type: "timeline"
scope: ""  # e.g., "Asterion", "Elven Empire", "Current Campaign"
tags: ["timeline"]
created: {{date}}
updated: {{date}}
---

# {{title}}

## Overview
Purpose and scope of this timeline

## Key Events
```dataview
TABLE date, event, significance
FROM #history 
WHERE contains(timelines, this.file.link)
SORT date ASC
```

## Eras
1. **Era Name** (YEAR-YEAR)
   - Key developments
   - Major events

## Notable Figures
- [[Figure 1]]: Role in these events
- [[Figure 2]]: Role in these events
