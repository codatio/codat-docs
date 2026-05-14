---
title: "What's new on the Companies table in Codat Portal"
date: "2026-05-13"
tags: ["Product", "Update", "Portal"]
authors: pmckinney
---

We are rolling out a series of improvements to the Companies table in the Codat Portal that make it easier to see which systems each company is connected to, customize the columns you care about, and drill into connection details without leaving the table.

<!--truncate-->

## What's new?

Throughout **May 2026**, we are shipping a set of updates to the Companies table in the [Codat Portal](https://app.codat.io). Some are already live; others are rolling out over the coming weeks.

### Platforms column

A dedicated **Platforms** column now sits between the **Connection** and **Created** columns on the Companies table, restoring the at-a-glance view of which integrations each company has connected.

![Companies table improvements](/img/updates/260512-portal-platforms-column.png)

- Pill colours reflect the connection state for each platform: **green** for linked, **amber** for deauthorized, **grey** for unlinked, and **neutral** for pending authorization.
- When a company has more platforms than fit in the column, a **+N** chip indicates how many additional integrations are connected.
- Hovering the cell opens a tooltip with the connection status, the full list of platforms with status indicators, and — for parent rows with subsidiaries — an **X/Y companies** counter showing how many subsidiaries are connected.
- Searching by a platform name in the table search input filters the rows, with matches highlighted in the pills.

### Connection details in one click <em>(coming soon)</em>

Platform pills, the **+N** chip, and the connection status will become clickable. Selecting any of them opens a connections panel for that company — without leaving the table.

![Connections panel opened from the Platforms column](/img/updates/260513-portal-connections-modal.gif)

- Every connection for the company is listed with its logo, platform name, connection ID, source type, and live status pill.
- When one or more connections have errors, an info-style alert appears above the list showing a count of affected connections and a quick link to manage them.
- A **Manage connections** button takes you straight to that company's connections page when you want to dig in further.

### Customizable columns <em>(coming soon)</em>

A new **Columns** dropdown will let you choose which columns appear on the Companies table, with your selection remembered the next time you open the page.

![Columns dropdown on the Companies table](/img/updates/260513-portal-columns-dropdown.png)

- Columns are split into two groups: **Default** (Created date, Last data sync, Platforms) and **Additional** (Products).
- A header checkbox toggles all optional columns at once, and a **Default view** footer button resets your selection back to the defaults.
- The dropdown trigger summarizes the current state — **Default**, **All**, or **N/total** — so you can see at a glance how your view is configured.
- The same dropdown will appear on the **Subsidiaries** page, with your selection shared between the two views so your preference follows you.
- **Company name** and **Connection status** stay locked on and are not listed in the dropdown.

### Last data sync column rename

The previous **Last Updated** column has been renamed to **Last data sync** to more accurately describe the value: the timestamp of the most recent successful data exchange across all of a company's connections.

- Companies with no successful sync render an em dash (—) and sort to the bottom of the list in both directions.
- Date values render in your selected locale (English or Canadian French).

## Who is this relevant for?

These updates benefit all customers who use the Codat Portal to manage their companies, and are especially useful for implementation, support, and customer-facing teams who need to quickly identify which systems each company is connected to, customize their view, and triage connection issues.

## How to get started?

No action is required to benefit from these updates. Open the **Companies** or **Subsidiaries** page in the [Codat Portal](https://app.codat.io) to see the shipped improvements, and watch this space for the column selector and one-click connections panel rolling out over the coming weeks.
