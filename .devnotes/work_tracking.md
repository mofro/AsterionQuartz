# Asterion Vault - Work Tracking

## Current Focus
- [ ] **Phase 1.1**: Set up directory structure for Living History System
- [ ] **Phase 1.2**: Create Living History templates
- [ ] **Phase 1.3**: Update existing templates to support history integration

## Phase 1: Foundation Setup

### 1.1 Directory Structure
```
_snippets/
  history/
    locations/      # Location-specific histories
    characters/     # Character-specific histories
    events/         # Major historical events
  timelines/       # Timeline views and aggregations
```

### 1.2 Template Creation
- [ ] **History Template** (`_templates/history_entry.md`)
  ```yaml
  ---
  type: history
  # Required: At least one of these date fields must be provided
  date: YYYY-MM-DD        # Specific date (most precise)
  date_year: YYYY         # Year only (for ancient/uncertain dates)
  date_range:             # For events spanning multiple days
    from: YYYY-MM-DD
    to: YYYY-MM-DD
  date_era: "Age of X"    # For pre-modern/alternate calendars
  date_uncertain: true    # Set if the date is approximate/uncertain
  
  # Event classification
  event_type: created | updated | discovered | battle | treaty | founding | death | birth | milestone
  event_importance: minor | normal | major | epochal  # For filtering/sorting
  
  # Related content
  related_entities: []    # Links to characters, locations, etc.
  source: ""             # Source of this information (e.g., "Session 42", "DM Notes")
  
  # Organization
  tags: []
  timeline: main          # Which timeline(s) this appears in
  ---
  
  # {{title}}
  
  ## Summary
  
  ## Timeline Context
  <!-- Add any relevant historical context or background -->
  
  ## Event Details
  
  ## Aftermath & Consequences
  
  ## Related Events
  <!-- Use Dataview to automatically populate this section -->
  ```dataview
  TABLE date, event_type
  FROM "_snippets/history"
  WHERE contains(related_entities, this.file.link)
  SORT date ASC
  ```
  
  ## Date Handling Guidelines
  - **Specific Dates**: Use `date: YYYY-MM-DD` when the exact day is known
  - **Year Only**: Use `date_year: YYYY` for ancient/uncertain dates
  - **Date Ranges**: Use `date_range` for events spanning multiple days
  - **Eras**: Use `date_era` for pre-modern/alternate calendars
  - **Uncertainty**: Set `date_uncertain: true` for approximate dates
  - **Unknown Dates**: Use `date_year: 9999` and `date_uncertain: true` if completely unknown

- [ ] **Timeline View Template** (`_templates/timeline_view.md`)
  ```markdown
  # {{timeline_name}} Timeline
  
  ```dataview
  TABLE date, event, session
  FROM "_snippets/history"
  WHERE contains(related_entities, "{{entity_name}}")
  SORT date DESC
  ```
  ```

### 1.3 Update Existing Templates
- [ ] Add history section to character template
- [ ] Add history section to location template
- [ ] Update session log template to include history events

## Phase 2: Content Migration

### 2.1 Historical Data Extraction
- [ ] Identify key historical events from session logs
- [ ] Create history entries for major events
- [ ] Link events to related entities

### 2.2 Timeline Creation
- [ ] Create main campaign timeline
- [ ] Create character-specific timelines
- [ ] Create location-specific timelines

## Phase 3: Automation

### 3.1 Scripts
- [ ] History entry generator
- [ ] Timeline updater
- [ ] Cross-reference validator

## Progress Tracking

### Completed Tasks
- [x] Initial architectural decisions documented
- [x] Basic directory structure defined

### In Progress
- [ ] Living History System implementation

### Pending Review
- [ ] Initial template review
- [ ] First history entry test

## Next Steps
1. Create the `_snippets/history` directory structure
2. Implement the history entry template
3. Update character and location templates to include history sections
4. Create a test history entry and verify transclusion works

## Notes
- Last updated: 2025-11-11
- Current focus: Phase 1 Implementation
