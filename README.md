# WEB103 Prework - _Creatorverse_

Submitted by: **Viet Thai Nguyen**

About this web app: **Creatorverse is a React web app that lets users discover, add, view, edit, and delete content creators. The app displays a curated gallery of creators with their name, page link, description, and optional image. It uses Supabase as the backend database and React Router for navigation between pages.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [x] Added a full-screen homepage hero section with a background image, title, subtitle, and call-to-action buttons
- [x] Added smooth scrolling from the hero section to the creator gallery
- [x] Added a polished dark theme with responsive card layouts
- [x] Added a more engaging creator detail page with a large image section and action buttons
- [x] Added live preview cards on the Add Creator and Edit Creator pages
- [x] Added delete confirmation before removing a creator
- [x] Added responsive styling for smaller screen sizes

## Video Walkthrough

Here's a walkthrough of implemented required features:

[Click here to watch my Loom video walkthrough](https://www.loom.com/share/YOUR_LOOM_VIDEO_ID)

Video created with **Loom**

## Notes

One challenge I encountered was connecting the React frontend to Supabase correctly. I had to make sure that the Supabase project URL and anon public API key were used properly in the client file. Another challenge was designing the app so that images looked good without being cropped, so I used `object-fit: contain` for creator images. I also improved the user experience by adding a homepage hero section, creator cards, detail pages, and live previews for adding and editing creators.

## License

Copyright [2026] [Viet Thai Nguyen]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
