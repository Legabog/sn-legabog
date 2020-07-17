import React from "react";
import classes from "./App.module.css";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter, Switch } from "react-router-dom";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NewsContainer from "./components/News/NewsContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import Login from "./components/Login/Login";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import MusicList from "./components/Music/MusicList/MusicList";
import ArtistsList from "./components/Music/MusicList/Artists/Artists";
import AlbumsList from "./components/Music/MusicList/Albums/Albums";
import ArtistItemRouter from "./components/Music/ArtistItemRouter/ArtistItemRouter";
import MusicPlayer from "./components/Music/MusicPlayer/MusicPlayer";
import PlayLists from "./components/Music/MusicList/PlayLists/PlayLists";
import CreateAlbum from "./components/Music/MusicList/CreateAlbum/CreateAlbum";
import { getMusicAlbumsData } from "./redux/musicalbums-reducer";
import ErrorRoute from "./components/common/ErrorRoute/ErrorRoute";
import {
  addToPlayList,
  switchStateOfPlayLists,
  addTrackToPlayList,
  getMyOwnPlayLists,
  createNewPlayList,
  deleteOwnPlayList,
  deleteTrackFromPlayList
} from "./redux/musicalplaylists-reducer";
import OwnPlayListsRouter from "./components/Music/OwnPlayListsRouter/OwnPlayListsRouter";
import firebase from "firebase/app"
import 'firebase/storage';


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
                render={() => <ProfileContainer />}
              />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/news" component={() => <NewsContainer />} />
              <Route path="/login" component={() => <Login />} />
              <Route path="/settings" component={() => <SettingsContainer />} />

              {/* -----------------------Player Routes----------------- */}
              <Route path="/music" component={() => <Music />} />
              <Route exact path="/music-list" component={() => <MusicList />} />
              <Route
                exact
                path="/music-list/artists"
                component={() => <ArtistsList />}
              />
              <Route
                exact
                path="/music-list/albums"
                component={() => <AlbumsList />}
              />
              <Route
                exact
                path="/music-list/playlists"
                component={() => <PlayLists />}
              />
              <Route
                exact
                path="/music-list/playlists/create"
                component={() => (
                  <CreateAlbum fetch={this.props.fetch} addToPlayList={this.props.createNewPlayList} update={this.props.getMyOwnPlayLists}/>
                )}
              />
              {this.props.musicAlbums.map((e) => (
                <Route
                  key={e._id}
                  exact
                  path={`/music-list/artists/${e.author}`}
                  component={() => <ArtistItemRouter nameArtist={e.author} />}
                />
              ))}
              {this.props.Fetching ? <Preloader /> : null}
              {this.props.musicAlbums.map((e) => (
                <Route
                  key={Math.random()}
                  exact
                  path={`/music-player/${e.author}/${e.title}`}
                  component={() => (
                    <MusicPlayer
                      nameArtist={e.author}
                      albumTitle={e.title}
                      img={e.albumcoverUrl}
                      switchStateOfPlayLists={this.props.switchStateOfPlayLists}
                      addTrackToPlayList={this.props.addTrackToPlayList}
                    />
                  )}
                />
              ))}
              {this.props.ownPlayLists.map((e) => (
                <Route
                  key={Math.random()}
                  exact
                  path={`/music-playlists/${e.title}/`}
                  component={() => (
                    <OwnPlayListsRouter
                      id={e._id}
                      img={e.playlistcoverUrl}
                      title={e.title}
                      description={e.description}
                      tracks={e.tracks}
                      deleteOwnPlayList={this.props.deleteOwnPlayList}
                      deleteTrackFromPlayList={this.props.deleteTrackFromPlayList}
                    />
                  )}
                />
              ))}
              <Route exact path="/" />
              <Route render={() => <ErrorRoute />} />
            </Switch>
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
    deleteTrackFromPlayList
  })
)(App);
