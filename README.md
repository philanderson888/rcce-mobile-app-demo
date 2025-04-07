# RCCE Church App

A demo application for Revival Christian Church of Enfield (RCCE) showcasing core features for a potential mobile app. This web application serves as a prototype to demonstrate key functionality and user experience.

## Project Goal

This repository represents the mobile app version of the RCCE church application, forked from the original web app demo. The goal is to adapt and optimize the existing web application into a mobile-first experience while maintaining all core functionality. This mobile adaptation will focus on:

- Touch-friendly interactions
- Mobile-optimized layouts
- Performance optimization for mobile devices
- Mobile-specific navigation patterns
- Enhanced gesture support

**Version**: 1.0.0  
**Date**: March 2025  
**Authors**:  
- Phil Anderson (Project Lead)
- Bolt (Lead Developer)
- RCCE Development Team

## Development Roadmap

### Current Phase: User Testing & Initial Release
1. **User Testing & Feedback**
   - Gather feedback from church members and stakeholders
   - Identify areas for improvement
   - Validate current features and usability
   - Make necessary adjustments based on feedback

2. **Initial Release**
   - Deploy first public version
   - Ensure stable core functionality
   - Monitor performance and usage
   - Gather initial user feedback

### Future Enhancements
Once the app is live, we plan to implement incremental improvements including:

1. **Enhanced Notifications**
   - YouTube livestream notifications when services go live
   - Event reminders and updates
   - Church announcements

2. **Community Features**
   - Prayer request submission and sharing
   - Community prayer wall
   - Prayer tracking and notifications

3. **Spiritual Growth**
   - Bible study plan recommendations
   - Daily verse features
   - Reading progress tracking
   - Study resources integration

4. **Analytics & Metrics**
   - Google Analytics integration
   - User engagement tracking
   - Feature usage statistics
   - User journey analysis
   - Performance metrics
   - Traffic source analysis

## PWA Development Roadmap

### Phase 1: PWA Foundation ✅
- [x] Add Web App Manifest (manifest.json)
- [x] Implement Service Worker for offline functionality
- [x] Create app icons in various sizes
- [x] Configure PWA metadata in index.html

### Phase 2: Mobile UI Optimization ✅
- [x] Convert top navigation to bottom mobile navigation
- [x] Adjust all tap targets for touch (minimum 44x44px)
- [x] Optimize spacing and typography for mobile
- [x] Enhance touch feedback and interactions

### Phase 3: Performance Optimization ✅
- [x] Implement code splitting for each route
- [x] Add loading states and skeleton screens
- [x] Optimize and lazy load images
- [x] Cache API responses

### Phase 4: Mobile Features ✅
- [x] Add "Add to Home Screen" prompt
- [x] Implement offline fallbacks
- [x] Add pull-to-refresh functionality
- [x] Enable share functionality for sermons

### Phase 5: Testing & Enhancement ✅
- [x] Test offline functionality
- [x] Verify installation flow
- [x] Check performance metrics
- [x] Test on various devices and browsers

## Features

### 1. Live Streaming
- Real-time church service streaming integration
- YouTube Live API integration with automatic status polling
- Fallback to next service time when offline
- Service schedule display
- Error handling and status notifications

### 2. Sermon Archive
- YouTube API integration for historical sermons
- Thumbnail previews
- Description and date information
- Direct links to full sermons
- Responsive video grid layout

### 3. Calendar System
- ChurchSuite calendar integration
- Event details and descriptions
- Date and time formatting
- Location information
- Grid and list view options

### 4. Events
- ChurchSuite events integration
- Embedded calendar view
- Event registration capability
- Responsive layout
- Seamless integration with church management system

### 5. Social Media Integration
- Comprehensive social media links
- Platform-specific icons
- External links to:
  - Website (rccenfield.org)
  - Facebook
  - Instagram
  - YouTube
  - X (Twitter)

### 6. Contact Information
- Church location details
- Service times
- Contact methods (phone, email)
- Interactive links
- Responsive layout

### 7. Navigation
- Responsive navigation system
- Mobile-friendly design
- Icon-based navigation
- Active page highlighting
- External link handling

## Technical Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Development Tools**:
  - ESLint
  - TypeScript ESLint
  - PostCSS
  - Autoprefixer

## Environment Variables

Required environment variables:
```
VITE_YOUTUBE_API_KEY=your_youtube_api_key
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## API Integrations

### YouTube Data API v3
- Live stream detection
- Video playlist retrieval
- Thumbnail and metadata fetching
- Error handling and status reporting

### ChurchSuite Integration
- Calendar and events system
- Donation handling
- Event registration

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile and desktop
- Progressive enhancement

## License

MIT License - See LICENSE file for details