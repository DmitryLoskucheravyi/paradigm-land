import ApiClient from "./ApiClient";
import CoursesService from "./CoursesService";
import ReviewsService from "./ReviewsService";
import VideoService from "./VideoService";
import FaqService from "./FaqService";

class Api {
    constructor(baseURL) {
        this.client = new ApiClient(baseURL);
        this.courses = new CoursesService(this.client);
        this.reviews = new ReviewsService(this.client);
        this.video = new VideoService(this.client);
        this.faq = new FaqService(this.client);
    }
}

const api = new Api(import.meta.env.VITE_API_URL || 'http://localhost:3000');

export default api;
