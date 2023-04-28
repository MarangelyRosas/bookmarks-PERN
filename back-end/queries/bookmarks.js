const db = require("../db/dbConfig.js");

const getAllBookmarks = async () => {
  try {
    const allBookmarks = await db.any("SELECT * FROM bookmarks");
    return allBookmarks;
  } catch (error) {
    return { error: error };
  }
};

const getBookmark = async (id) => {
  console.log(id);
  try {
    const bookmark = await db.one(`SELECT * FROM bookmarks WHERE id=${id}`);
    return bookmark;
  } catch (error) {
    return { error: error };
  }
};

const createBookmark = async (bookmark) => {
  try {
    const newBookmark = await db.one(
      `INSERT INTO
        bookmarks(name,  url, is_favorite, category)
       VALUES
        ($1, $2, $3, $4)
       RETURNING *;`,
      [bookmark.name, bookmark.url, bookmark.is_favorite, bookmark.category]
    );
    return newBookmark;
  } catch (error) {
    return { error: error };
  }
};

const deleteBookmark = async (id) => { // bookmarks/id
  try{
    const deletedBookmark = await db.one("DELETE FROM bookmarks WHERE id=$1 RETURNING *", id)
    return deletedBookmark;
  } catch(error) {
    return error;
  }
};

const updatedBookmark = async () => { // bookmarks/id
  try {
    const updateBookmark = await db.one(
      `UPDATE FROM bookmarks SET name=$1, url=$2, category=$3, is_favorite=$4`,
      [bookmark.name, bookmark.url, bookmark.category, bookmark.is_favorite, id]
    );
    return updateBookmark;
  } catch (error) {
    return error;
  }
};


module.exports = {
  getAllBookmarks,
  getBookmark,
  createBookmark,
  deleteBookmark,
  updatedBookmark,
};