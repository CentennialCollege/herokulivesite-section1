"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMovieListPage = void 0;
const movie_1 = __importDefault(require("../Models/movie"));
const Util_1 = require("../Util");
function DisplayMovieListPage(req, res, next) {
    movie_1.default.find(function (err, moviesCollection) {
        if (err) {
            console.error(err.message);
            res.end(err);
        }
        res.render('index', { title: 'Movie List', page: 'movie-list', movies: moviesCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayMovieListPage = DisplayMovieListPage;
//# sourceMappingURL=movie-list.js.map