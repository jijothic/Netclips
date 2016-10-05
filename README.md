# Netclips

[Heroku link][heroku] **Note:** Link to Netclips

## Minimum Viable Product

Netclips and code! Netclips is a web application inspired by Netflix built using Ruby on Rails & React/Redux. The main features of this website will include:

- [X] New account creation, login, and guest/demo login
- [ ] A production README
- [X] Hosting on Heroku
- [ ] Smooth, bug-free navigation, adequate seed data and sufficient CSS styling

- [ ] Videos
  - Access various series to pick & play video clips

- [ ] Reviews
  - Read reviews (top reviews & all) for a series
  - Write only one review per series
  - Rate a series

- [ ] MyList
  - Create a 'My List' to keep track of series-to-watch

- [ ] Wrap-around Scroll
  - Series are organized by genre with a 'wrap-around' scroll

- [ ] Search
  - Search for a series by genre or title (cast as a bonus)

- Bonus:
  - [ ] Track Current Episodes for Many Series
    - Keep track of which episode a user was on for a given series

  - [ ] Feature
    - Browse page will have a 'feature' series to watch based on most recent addition

  - [ ] OAuth
    - Login using OAuth through Facebook

  - [ ] Feature: Infinite Scroll
    - More genres will load if you scroll to the bottom

  - [ ] Feature: Auto-play
    - Clips will auto-play to the next clip in the series

  - [ ] Feature: Suggested Series
    - Series will be suggested based on user's history of watching a genre

  - [ ] Feature: Submitting New Series/Clips
    - Submit a new clip - reserved only for admins

  - [ ] Feature: Notification
    - Notifications for new clips added to database

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] User model/migration
- [ ] Back end authentication (session/password)
- [ ] StaticPages controller and root view
- [ ] Webpack & react/redux modules
- [ ] APIUtil to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Series Model, API, and components (2 days)

**Objective:** Series can be created, read, edited and destroyed through the API.

- [ ] Series model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for series (SeriesController)
- [ ] JBuilder views for series
- Series components and respective Redux loops
  - [ ] SeriesIndex
    - Will be primary portion of app
      * Included in 'browse', 'mylist' and 'search'
  - [ ] SeriesIndexRow
    - Each row in the index that implements 'wrap-around' scrolling
  - [ ] SeriesIndexItem
    - Ratings
    - Play current episode
  - [ ] SeriesDetailPane
      - SeriesDetail
      - SeriesOverview
      - SeriesEpisodes
  - [ ] Seed series

### Phase 3: Episode Model, API, and components (3 days)

**Objective:** Episodes can be created, read, edited and destroyed through the API.

- [ ] Episode model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for episodes (EpisodesController)
- [ ] JBuilder views for episodes
- Episodes components and respective Redux loops
  - [ ] EpisodeIndex
    - Nested in SeriesIndexItem::SeriesEpisodes
    - Implement 'wrap-around' scrolling
  - [ ] EpisodeIndexItem
  - [ ] EpisodeShow
    - Be able to watch an episode through YouTube API
  - [ ] Seed episodes within series

### Phase 4: Reviews (2 day)

**Objective:** Reviews belong to series that can be created, read, edited and destroyed through the API.

- [ ] Review model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for reviews (ReviewsController)
- [ ] JBuilder views for reviews
- [ ] Adding reviews requires a series
- Reviews components and respective Redux loops
  - [ ] ReviewsIndex
    - Preview shown in SeriesIndexItem::SeriesDetail
      - All reviews shown through Modal
  - [ ] ReviewForm
    - User can write own review in SeriesIndexItem::SeriesDetail
- [ ] Seed reviews

### Phase 5: Searching (1 day)

**Objective:** Be able to search for series by genre or title

- Search results will use presentation components of primary app (series & episodes) but will filter which series are sent

- [ ] Search model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for Search (SearchController)
- [ ] JBuilder views for Search

### Phase 6: My List (1 day)

**Objective:** Be able to create a list of series-to-watch that can be updated (added to & removed from)

- MyList will use presentation components of primary app (series & episodes) but will filter which series are sent

- [ ] MyList model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for MyList (MyListsController)
- [ ] JBuilder views for MyList

### Phase 7: Pagination / infinite scroll for Series Index (1 day)

**Objective:** Add infinite scroll to Series Index

- [ ] Paginate Series Index API to send 4 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll
