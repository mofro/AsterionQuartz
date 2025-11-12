---
title: "{{EVENT_NAME}}"
type: "history"
date: YYYY-MM-DD  # or date_year: YEAR for older events
date_uncertain: false  # true if date is approximate
event_type: "battle|treaty|disaster|discovery|etc"
significance: "minor|moderate|major|world-changing"
participants: []  # links to characters/organizations
locations: []  # links to locations
sources: []  # links to session logs or other sources
tags: ["history"]
created: {{date}}
updated: {{date}}
---

# {{title}}

## Summary
Brief description of the event

## Background
What led to this event?

## The Event
Detailed account of what happened

## Aftermath
Consequences and effects

## Sources
```dataview
LIST FROM #source WHERE contains(events, this.file.link)
```

## Related Events
- [[Previous Event]]: Led to this
- [[Next Event]]: Resulted from this
