import http from "../http-common";
class TicketService {
 
  getAll(payload) {
    return http.post("/tickets",payload);
  }

}
export default new TicketService();