---
title: "{{NAME}}"
type: "character"
subtype: "antagonist"
race: "{{RACE}}"
class: "{{CLASS}}"
threat: "{{THREAT_LEVEL}}"  # low, medium, high, extreme
goals: []
weaknesses: []
tags: ["character", "antagonist"]
created: {{date}}
updated: {{date}}
---

# {{title}}

## Description
Appearance and notable features

## Background
Origin and motivations

## Abilities
- **Combat**:
- **Magic**:
- **Special Powers**:

## Plans
Current schemes and goals

## Encounters
```dataview
LIST FROM #session WHERE contains(encounters, this.file.link)
SORT date DESC
```

## Minions
- [[Minion 1]]
- [[Minion 2]]
