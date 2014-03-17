describe('Count clicks', function() {
  it('adds 1 to counter when clicked', function() {
    counter = 0;
    countClick();
    countClick();
    expect(counter).toEqual(2);
  });
});

describe('Game', function() {
  it('displays a pop up for who goes first', function() {
    counter = 2;
    var board = new Board();
    spyOn(board, 'newBoard');
    var game = new Game()
    expect(board).toHaveBeenCalled();
  });
});

describe('New Game', function() {
  it('when 0 space_left or someone wins', function() {
    counter = 2;
    var boardState = new RenderBoard();
    new CheckGameResult();
    expect(boardState.state[0]).toEqual('');
  });
});
