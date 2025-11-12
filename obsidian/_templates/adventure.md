---
title: "{{ADVENTURE_NAME}}"
type: "adventure"
level_range: "X-Y"  # character levels
estimated_sessions: X
status: "planning"  # planning, active, completed, abandoned
dramatis_personae: []  # key NPCs
locations: []  # key locations
tags: ["adventure"]
created: {{date}}
updated: {{date}}
---

# {{title}}

## Overview
Brief summary of the adventure

## Background
What led to this adventure?

## Synopsis
- **Hook**: How the party gets involved
- **Act 1**: 
- **Act 2**:
- **Climax**:
- **Resolution**:

## Key NPCs
- [[NPC 1]]: Role and motivation
- [[NPC 2]]: Role and motivation

## Locations
- [[Location 1]]: Significance
- [[Location 2]]: Significance

## Sessions
```dataview
LIST FROM #session WHERE contains(adventure, this.file.link)
SORT date ASC
```

## Rewards
- **XP**:
- **Treasure**:
- **Other**:
