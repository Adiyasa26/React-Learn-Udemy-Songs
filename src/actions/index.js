// Action creator
export const selectSong = song => {
  // Return as action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
