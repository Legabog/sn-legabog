import React, { Suspense } from "react";
import classes from "./App.module.css";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Route, withRouter, Switch } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import { getMusicAlbumsData } from "./redux/musicalbums-reducer";
import ErrorRoute from "./components/common/ErrorRoute/ErrorRoute";
import {
  addToPlayList,
  switchStateOfPlayLists,
  addTrackToPlayList,
  getMyOwnPlayLists,
  createNewPlayList,
  deleteOwnPlayList,
  deleteTrackFromPlayList,
} from "./redux/musicalplaylists-reducer";
import {
  setMusicForPlayer,
  toggleIsPlaying,
  playPlayer,
  pausePlayer,
  setIndexOfTrack,
  nextTrack,
  previousTrack,
  shuffleMusic,
  setActiveTrackAndPlayerPlayListNull,
} from "./redux/musicplayer-reducer";
import MusicPlayerPanel from "./components/MusicPlayerPanel/MusicPlayerPanel";
import NotifyForm from "./components/common/NotifyForm/NotifyForm";
import firebase from "firebase/app";
import "firebase/storage";

//--------------React.lazy components
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const Music = React.lazy(() => import("./components/Music/Music"));
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const NewsContainer = React.lazy(() =>
  import("./components/News/NewsContainer")
);
const SettingsContainer = React.lazy(() =>
  import("./components/Settings/SettingsContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));
const MusicList = React.lazy(() =>
  import("./components/Music/MusicList/MusicList")
);
const ArtistsList = React.lazy(() =>
  import("./components/Music/MusicList/Artists/Artists")
);
const AlbumsList = React.lazy(() =>
  import("./components/Music/MusicList/Albums/Albums")
);
const ArtistItemRouter = React.lazy(() =>
  import("./components/Music/ArtistItemRouter/ArtistItemRouter")
);
const PlayLists = React.lazy(() =>
  import("./components/Music/MusicList/PlayLists/PlayLists")
);
const MusicPlayer = React.lazy(() =>
  import("./components/Music/MusicPlayer/MusicPlayer")
);
const CreateAlbum = React.lazy(() =>
  import("./components/Music/MusicList/CreateAlbum/CreateAlbum")
);
const OwnPlayListsRouter = React.lazy(() =>
  import("./components/Music/OwnPlayListsRouter/OwnPlayListsRouter")
);

class App extends React.Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCxA5YZP2u1BeiuAtesygR3xKUNS4WM0PA",
      authDomain: "covers-storage.firebaseapp.com",
      databaseURL: "https://covers-storage.firebaseio.com",
      projectId: "covers-storage",
      storageBucket: "covers-storage.appspot.com",
      messagingSenderId: "456989699477",
      appId: "1:456989699477:web:0e5e127c696069834e1a9c",
      measurementId: "G-M27KYJSGPK",
    };
    firebase.initializeApp(firebaseConfig);

    this.props.initializeApp();
    this.props.getMusicAlbumsData();
    this.props.getMyOwnPlayLists();
    
  }

  render() {
    if (this.props.initialized) {
      return (
        <div className={classes.appwrapper}>
          <HeaderContainer />
          <Navbar />
          <div className={classes.appwrappercontent}>
            <Switch>
              {/* -------------------------Netowrk Routes----------------- */}
              <Route
                path="/profile/:userId?"
                render={() => (
                  <Suspense fallback={<Preloader />}>
                    <ProfileContainer />
                  </Suspense>
                )}
              />
              <Route
                path="/dialogs"
                render={() => (
                  <Suspense fallback={<Preloader />}>
                    <DialogsContainer />
                  </Suspense>
                )}
              />
              <Route
                path="/users"
                render={() => (
                  <Suspense fallback={<Preloader />}>
                    <UsersContainer />
                  </Suspense>
                )}
              />
              <Route
                path="/news"
                component={() => (
                  <Suspense fallback={<Preloader />}>
                    <NewsContainer />
                  </Suspense>
                )}
              />
              <Route
                path="/login"
                component={() => (
                  <Suspense fallback={<Preloader />}>
                    <Login />
                  </Suspense>
                )}
              />
              <Route
                path="/settings"
                component={() => (
                  <Suspense fallback={<Preloader />}>
                    <SettingsContainer shuffleMusic={this.props.shuffleMusic} />
                  </Suspense>
                )}
              />

              {/* -----------------------Player Routes----------------- */}
              <Route
                path="/music"
                component={() => (
                  <Suspense fallback={<Preloader />}>
                    <Music />
                  </Suspense>
                )}
              />
              <Route
                exact
                path="/music-list"
                component={() => (
                  <Suspense fallback={<Preloader />}>
                    <React.Fragment>
                      <MusicList />
                    </React.Fragment>
                  </Suspense>
                )}
              />
              <Route
                exact
                path="/music-list/artists"
                component={() => (
                  <Suspense fallback={<Preloader />}>
                    <ArtistsList />
                  </Suspense>
                )}
              />
              <Route
                exact
                path="/music-list/albums"
                component={() => (
                  <Suspense fallback={<Preloader />}>
                    <AlbumsList />
                  </Suspense>
                )}
              />
              <Route
                exact
                path="/music-list/playlists"
                component={() => (
                  <Suspense fallback={<Preloader />}>
                    <PlayLists />
                  </Suspense>
                )}
              />
              <Route
                exact
                path="/music-list/playlists/create"
                component={() => (
                  <Suspense fallback={<Preloader />}>
                    <CreateAlbum
                      fetch={this.props.fetch}
                      addToPlayList={this.props.createNewPlayList}
                      update={this.props.getMyOwnPlayLists}
                    />
                  </Suspense>
                )}
              />
              {this.props.musicAlbums.map((e) => (
                <Route
                  key={e._id}
                  exact
                  path={`/music-list/artists/${e.author}`}
                  component={() => (
                    <Suspense fallback={<Preloader />}>
                      <ArtistItemRouter nameArtist={e.author} />
                    </Suspense>
                  )}
                />
              ))}
              {this.props.Fetching ? <Preloader /> : null}
              {this.props.musicAlbums.map((e) => (
                <Route
                  key={Math.random()}
                  exact
                  path={`/music-player/${e.author}/${e.title}`}
                  component={() => (
                    <Suspense fallback={<Preloader />}>
                      <MusicPlayer
                        nameArtist={e.author}
                        albumTitle={e.title}
                        img={e.albumcoverUrl}
                        switchStateOfPlayLists={
                          this.props.switchStateOfPlayLists
                        }
                        addTrackToPlayList={this.props.addTrackToPlayList}
                        playPlayer={this.props.playPlayer}
                        setMusicForPlayer={this.props.setMusicForPlayer}
                        setIndexOfTrack={this.props.setIndexOfTrack}
                        musicPlayerPlayList={this.props.musicPlayerPlayList}
                        indexOfPlayingTrack={this.props.indexOfPlayingTrack}
                        isPlaying={this.props.isPlaying}
                        activeTrack={this.props.activeTrack}
                        disablerButtonPlay={this.props.disablerButtonPlay}
                      />
                    </Suspense>
                  )}
                />
              ))}
              {this.props.ownPlayLists.map((e) => (
                <Route
                  key={Math.random()}
                  exact
                  path={`/music-playlists/${e.title}/`}
                  component={() => (
                    <Suspense fallback={<Preloader />}>
                      <OwnPlayListsRouter
                        id={e._id}
                        img={e.playlistcoverUrl}
                        title={e.title}
                        description={e.description}
                        tracks={e.tracks}
                        deleteOwnPlayList={this.props.deleteOwnPlayList}
                        deleteTrackFromPlayList={
                          this.props.deleteTrackFromPlayList
                        }
                        playPlayer={this.props.playPlayer}
                        setMusicForPlayer={this.props.setMusicForPlayer}
                        setIndexOfTrack={this.props.setIndexOfTrack}
                        musicPlayerPlayList={this.props.musicPlayerPlayList}
                        indexOfPlayingTrack={this.props.indexOfPlayingTrack}
                        isPlaying={this.props.isPlaying}
                        activeTrack={this.props.activeTrack}
                        disablerButtonPlay={this.props.disablerButtonPlay}
                      />
                    </Suspense>
                  )}
                />
              ))}
              <Route exact path="/" />
              <Route render={() => <ErrorRoute />} />
            </Switch>
            <MusicPlayerPanel
              isPlaying={this.props.isPlaying}
              playPlayer={this.props.playPlayer}
              pausePlayer={this.props.pausePlayer}
              musicPlayerPlayList={this.props.musicPlayerPlayList}
              indexOfPlayingTrack={this.props.indexOfPlayingTrack}
              toggleIsPlaying={this.props.toggleIsPlaying}
              activeTrack={this.props.activeTrack}
              nextTrack={this.props.nextTrack}
              previousTrack={this.props.previousTrack}
              disablerButtonNext={this.props.disablerButtonNext}
              setActiveTrackAndPlayerPlayListNull={
                this.props.setActiveTrackAndPlayerPlayListNull
              }
            />

            <NotifyForm
              notifyTop={this.props.notifyTop}
              notifyOpacity={this.props.notifyOpacity}
              notifyVisibility={this.props.notifyVisibility}
            />
          </div>
        </div>
      );
    } else {
      return <Preloader />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.appReducer.initialized,
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    Fetching: state.musicAlbumsReducer.Fetching,
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher,
    ownPlayLists: state.musicPlayListReducer.ownPlayLists,
    isPlaying: state.musicPlayerReducer.isPlaying,
    musicPlayerPlayList: state.musicPlayerReducer.musicPlayerPlayList,
    indexOfPlayingTrack: state.musicPlayerReducer.indexOfPlayingTrack,
    activeTrack: state.musicPlayerReducer.activeTrack,
    disablerButtonNext: state.musicPlayerReducer.disablerButtonNext,
    disablerButtonPlay: state.musicPlayerReducer.disablerButtonPlay,
    notifyTop: state.notifyReducer.notifyTop,
    notifyOpacity: state.notifyReducer.notifyOpacity,
    notifyVisibility: state.notifyReducer.notifyVisibility,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
    getMusicAlbumsData,
    addToPlayList,
    switchStateOfPlayLists,
    addTrackToPlayList,
    getMyOwnPlayLists,
    createNewPlayList,
    deleteOwnPlayList,
    deleteTrackFromPlayList,
    setMusicForPlayer,
    toggleIsPlaying,
    playPlayer,
    pausePlayer,
    setIndexOfTrack,
    nextTrack,
    previousTrack,
    shuffleMusic,
    setActiveTrackAndPlayerPlayListNull,
  })
)(App);
