# Formatting Guidelines

## Lists

### List Types

**Numbered lists:**
Use when sequence is significant (ordered steps, phases, priorities).

**Example:**

1. Open the configuration file.
2. Add your API key.
3. Save the file.

**Bulleted lists:**
Use for nonsequential items (options, features, examples).

**Example:**

- API supports JSON and XML
- Rate limits apply per project
- Authentication is required

**Description lists:**
Use for terms with descriptions, definitions, or explanations.

**Example:**

- **API Key**: A unique identifier for your project
- **Endpoint**: The URL where you send requests
- **Response**: The data returned by the API

### Introductory Context

Introduce lists with complete sentences.

**Recommended:**

- "The API supports the following formats:"
- "To configure authentication, complete these steps:"

**Introduce with colon:**
Use a colon when the introduction immediately precedes the list.

### Capitalization and Punctuation

**For numbered, lettered, and bulleted lists:**

**Capital letters:**

- Start each item with a capital letter (unless case matters, like code)

**Periods:**

- Add periods to items containing verbs or complete thoughts
- Omit punctuation for:
  - Single-word items
  - Items without verbs
  - Code-only items
  - Link text

**Consistency rule:**
If punctuation is inconsistent, either:

1. Rewrite using parallel construction, or
2. Add end punctuation to every item

### Parallel Construction

Use the same syntax/structure for all list items.

**Recommended:**

- Configure the settings
- Install the dependencies
- Run the tests

**Avoid mixing structures:**

- Configure the settings (verb phrase)
- Dependencies must be installed (passive voice)
- You should run the tests (full sentence)

### Description List Formatting

**Run-in headings:**

- Bold the term
- End consistently with periods OR colons within the same list

**After periods:** Capitalize descriptions
**After colons:** Use lowercase

**Example with periods:**

- **GET.** Retrieves data from the server.
- **POST.** Sends data to the server.

**Example with colons:**

- **GET**: retrieves data from the server
- **POST**: sends data to the server

### Multiple Paragraphs in Lists

Use `<p>` elements rather than `<br>` tags for list items with multiple paragraphs.

## Comma-Separated Lists

**Use serial commas:**
"The API supports JSON, XML, and YAML formats."

**Avoid ending with "etc."**
Instead, introduce lists to clarify they're non-exhaustive.

**Recommended:**
"The API supports formats such as JSON, XML, and YAML."

## Numbers

### When to Use Numerals

**Use numerals for:**

- Numbers 10 and above
- All numbers in technical contexts (measurements, versions, quantities)
- Negative numbers
- Decimals and fractions

**Spell out:**

- Numbers zero through nine (except in technical contexts)
- Numbers at the beginning of sentences

### Ranges

Use en dash for ranges: "10–20 seconds"

## Dates and Times

### Date Format

Use international format to avoid confusion:

- **Recommended:** "17 January 2025" or "2025-01-17" (ISO 8601)
- **Avoid:** "1/17/2025" (ambiguous internationally)

### Time References

**Avoid time-specific references:**

- Don't use "currently" without a date
- Don't use "recently," "soon," "in the future"

**When necessary:**

- "As of January 2025..."
- "In version 2.0 (released January 2025)..."

### Timezones

Always specify timezone when providing specific times:

- "The service updates at 00:00 UTC"
- "Maintenance window: 3:00 AM–5:00 AM PST"

## Code and Technical Elements

### Code Font

Use `code font` for:

- Code elements (variables, functions, classes)
- Filenames and paths
- Command-line commands
- API endpoints

### UI Elements

**Bold for interactive elements:**

- Buttons: "Click **Submit**"
- Menu items: "Select **File** > **Open**"

### Placeholders

Use descriptive placeholder names in ALL_CAPS:

**Recommended:**

```
gcloud projects create YOUR_PROJECT_ID
```

**Make placeholders obvious:**

- `YOUR_PROJECT_ID` not `project-id`
- `YOUR_API_KEY` not `key`
- `YOUR_REGION` not `region`

## Procedures

### Structure

1. **Introduce the procedure** with a sentence describing what the user will accomplish
2. **Number the steps** in sequence
3. **Start each step with a verb** (imperative mood)
4. **Put conditionals first:** "If X, then do Y" not "Do Y if X"

### Example

To deploy your application:

1. Build the application:
   ```
   npm run build
   ```
2. If you haven't already, authenticate with the service:
   ```
   gcloud auth login
   ```
3. Deploy the build:
   ```
   gcloud app deploy
   ```

## Tables

- Use tables for structured, comparable data
- Include clear column headers
- Keep cell content concise
- Consider using lists for simple data
