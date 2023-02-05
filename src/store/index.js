import { createStore } from 'vuex';
import axios from 'axios';

const APIconfig = {
  baseURL: 'https://d706d748-0586-4c2b-9d30-288f5d3b0630.mock.pstmn.io/',
};

const state = () => ({
  eventList: [],
  detail: {},
  seats: [],
  selectedCategory: 1,
  selectedSeats: [],
  price: 0,
});

const mutations = {
  addEvent(state, events) {
    state.eventList = [];
    events.forEach((event) => {
      state.eventList.push(event);
    });
    // state.eventList.push(event);
  },
  addDetail(state, detail) {
    state.detail = detail;
  },
  addSeat(state, seat) {
    state.seats.push(seat);
  },
  setEventCategory(state, id) {
    state.selectedCategory = id;
  },
  selectSeat(state, id) {
    state.selectedSeats.push(id);
  },
  unSelectSeat(state, id) {
    state.selectedSeats.splice(
      state.selectedSeats.findIndex((x) => x.id == id),
      1
    );
  },
  cleanSelectedSeat(state) {
    state.selectedSeats = [];
  },
  setPrice(state, price) {
    state.price = price;
  },
};

const actions = {
  async getEventList({ commit }) {
    const res = await axios
      .get('events', APIconfig)
      .then((e) => e.data)
      .then((arr) =>
        arr.data.map((e) => {
          return {
            id: parseInt(e.id),
            title: e.title,
            image_url: e.image_url,
            event_date: e.event_date,
            venueID: e.venue.id,
            venueName: e.venue.name,
          };
        })
      );

    commit('addEvent', res);
  },
  async getEventDetail({ commit }, payload) {
    const res = await axios
      .get('events/' + payload, APIconfig)
      .then((e) => e.data)
      .then((e) => e.data);

    commit('setPrice', res.event_categories[0].price);
    commit('addDetail', res);

    return res;
  },
  async getSeatPlans({ commit, state }, payload) {
    state.seats = [];

    const res = await axios
      .get(
        'seat-plans/' + payload.eventId + '/' + payload.categoryId,
        APIconfig
      )
      .then((e) => e.data)
      .then((e) => e.data);

    res.forEach((element) => {
      commit('addSeat', element);
    });

    return res;
  },
  async setPayment({}, payload) {
    const res = await axios
      .post('payment', payload, APIconfig)
      .then((e) => e.data.message);

    return res;
  },
};

const getters = {
  getEventList(state) {
    return state.eventList;
  },
  getEventByID: (state) => (id) => {
    return state.eventList.find((x) => (x.id = id));
  },
  getDetail(state) {
    return state.detail;
  },
  getVenue(state) {
    return state.detail.venue;
  },
  getCategories(state) {
    return state.detail.event_categories;
  },
  getSeats(state) {
    return state.seats;
  },
  getSeatsByRows(state) {
    return state.seats.reduce(
      (hash, obj) => ({
        ...hash,
        [obj['row']]: (hash[obj['row']] || []).concat(obj),
      }),
      {}
    );
  },
  getEventCategory(state) {
    return state.selectedCategory;
  },
  getCheckSeatSelected: (state) => (id) => {
    return !!state.selectedSeats.find((x) => x == id);
  },
  getOrderTotal(state) {
    return state.selectedSeats.length * state.price;
  },
  getOrderInfo(state) {
    return {
      eventId: state.detail.id,
      eventCategoryId: state.selectedCategory,
      seats: '[' + state.selectedSeats.join(',') + ']',
    };
  },
};

export default createStore({
  modules: {
    // i18n,
    // Auth,
  },
  state,
  actions,
  mutations,
  getters,
});
