# Repository Agent Guide

## Scope
- The canonical app lives at `/Users/gitt/hub/dev/schwarzenbach-website/schwarzenbach-wm-website-react`.
- Keep this repository limited to the React/Vite app and required project configs.
- Do not add raw email attachments, screenshots, PDFs, or docs to repo root.
- Do not commit generated/local files such as `node_modules`, `dist`, `.vercel`, or `.env.local`.

## Email-Driven Change Workflow
1. One email = one task branch named `codex/<short-change-name>`.
2. Paste the email into Codex and ask for:
   - scope summary
   - acceptance criteria
   - exact files/pages affected
3. Implement only the requested scope in the minimum number of files.
4. Validate before deploy:
   - `npm install --legacy-peer-deps`
   - `npm run build`
5. Create a preview deployment (default):
   - Use the `vercel-deploy` skill when available.
   - Fallback command: `vercel --yes`
6. Share the preview URL and a concise summary of changes/risks.
7. Only deploy to production after explicit approval:
   - `vercel --prod`

## Commit Rules
- Keep each commit scoped to one email request.
- In commit messages, include what changed and which pages/components were affected.
- Never commit secrets, tokens, or local environment files.
