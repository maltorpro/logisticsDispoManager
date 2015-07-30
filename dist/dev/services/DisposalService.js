var DisposalService = (function () {
    function DisposalService() {
        this.disposals = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
    }
    DisposalService.prototype.get = function () {
        return this.disposals;
    };
    DisposalService.prototype.add = function (value) {
        this.disposals.push(value);
    };
    return DisposalService;
})();
exports.DisposalService = DisposalService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0Rpc3Bvc2FsU2VydmljZS50cyJdLCJuYW1lcyI6WyJEaXNwb3NhbFNlcnZpY2UiLCJEaXNwb3NhbFNlcnZpY2UuY29uc3RydWN0b3IiLCJEaXNwb3NhbFNlcnZpY2UuZ2V0IiwiRGlzcG9zYWxTZXJ2aWNlLmFkZCJdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQUE7UUFDRUMsY0FBU0EsR0FBR0EsQ0FBQ0EsVUFBVUEsRUFBRUEsT0FBT0EsRUFBRUEsUUFBUUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7SUFReERBLENBQUNBO0lBTkNELDZCQUFHQSxHQUFIQTtRQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtJQUN4QkEsQ0FBQ0E7SUFDREYsNkJBQUdBLEdBQUhBLFVBQUlBLEtBQWFBO1FBQ2ZHLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0lBQzdCQSxDQUFDQTtJQUNISCxzQkFBQ0E7QUFBREEsQ0FUQSxBQVNDQSxJQUFBO0FBVFksdUJBQWUsa0JBUzNCLENBQUEiLCJmaWxlIjoic2VydmljZXMvRGlzcG9zYWxTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERpc3Bvc2FsU2VydmljZSB7XG4gIGRpc3Bvc2FscyA9IFsnRGlqa3N0cmEnLCAnS251dGgnLCAnVHVyaW5nJywgJ0hvcHBlciddO1xuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwb3NhbHM7XG4gIH1cbiAgYWRkKHZhbHVlOiBPYmplY3QpIHtcbiAgICB0aGlzLmRpc3Bvc2Fscy5wdXNoKHZhbHVlKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==