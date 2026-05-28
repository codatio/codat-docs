---
title: "Diagnose connection issues with the new Connection Timeline in Codat Portal"
date: "2026-05-28"
tags: ["Product", "Update", "Portal"]
authors: brucepouncey
---

We have added a **Connection Timeline** drawer to the Codat Portal so you can self-serve the history of any data connection, including when it was started, completed, deauthorized, or unlinked, without leaving the Manage Connections page.

<!--truncate-->

## What's new?

A new **View timeline** button on the Manage Connections page in the [Codat Portal](https://app.codat.io) opens a right-anchored drawer with a per-connection diagnostic history. Until now, status pills told you the current state of a connection but not how it got there. The timeline closes that gap.

<div
  style={{
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginBottom: "2rem",
  }}
>
  <div
    style={{
      flex: "1",
      minWidth: "280px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src="/img/updates/timeline-connection-completed.png"
      alt="Connection Timeline drawer showing a completed connection, with Started and Completed steps"
      style={{
        maxHeight: "520px",
        width: "auto",
        height: "auto",
        objectFit: "contain",
        border: "1px solid #B2D4C7",
        borderRadius: "20px",
        boxShadow: "0 4px 24px rgba(24, 16, 58, 0.12)",
      }}
    />
  </div>
  <div
    style={{
      flex: "1",
      minWidth: "280px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src="/img/updates/timeline-connection-unlinked.png"
      alt="Connection Timeline drawer showing an unlinked connection, with the full history of transitions ending in Unlinked"
      style={{
        maxHeight: "520px",
        width: "auto",
        height: "auto",
        objectFit: "contain",
        border: "1px solid #B2D4C7",
        borderRadius: "20px",
        boxShadow: "0 4px 24px rgba(24, 16, 58, 0.12)",
      }}
    />
  </div>
</div>

### Chronological view of every status change

The drawer renders a vertical timeline of status transitions for the selected connection, oldest at the top and newest at the bottom. Each step shows the status, the date and time of the transition, and the reason where one is available for **Deauthorized** and **Unlinked** events.

Steps map onto the connection statuses you already see on the table:

- **Started**: when the link flow began
- **Completed**: when the connection became authorized and started syncing data
- **Deauthorized**: when access was revoked or expired
- **Unlinked**: when the connection was manually unlinked

### Switch between a company's connections without leaving the drawer

A connection picker at the top of the drawer lists every connection on the company. Selecting another platform replaces the timeline and status summary in place, so you don't need to close the drawer and reopen it from another row.

### Current status and last sync, at a glance

Above the timeline, the drawer surfaces the connection's **current status** as a colored pill and the **last successful sync** timestamp in your locale. These values come straight from the connection record, so they are always present even when the underlying transition history is not.

### Honest about data gaps for older connections

Connection transitions are only recorded from the release of this feature forward, and there is no historical backfill. Connections that have not transitioned since the recording started show a **"Timeline not available"** banner alongside the current status and creation date. As soon as those connections next change state (a relink, a deauthorization, an unlink), the timeline starts populating itself, so coverage self-heals over time.

![Connection Timeline drawer showing the "Timeline not available" empty state for a legacy connection without recorded transitions](/img/updates/timeline-notimeline.png)

The drawer and all of its labels are available in both English and Canadian French.

## Who is this relevant for?

This update is most useful for **bankers, implementation managers, and support engineers** who need to answer _"what's going on with this connection?"_, whether that's a client reporting data isn't flowing, a status pill showing **Deauthorized**, or an onboarding that has stalled. It also benefits any Portal user who wants a clear audit trail of how a connection has changed over time.

## How to get started?

No action is required to benefit from this update. Open the **Companies** page in the [Codat Portal](https://app.codat.io), pick a company, and click **View timeline** on any connection in the Manage Connections view to see its history.
