function update_grid(level, current_grid, clear_grid){

    let new_grid = null;
    if (clear_grid == true) {
        new_grid = current_grid
    } else {
        new_grid = [[0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 7, 0, 0, 0, 0, 0, 9], [0, 6, 0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 2, 8, 0, 0, 0, 0], [0, 8, 0, 0, 0, 0, 0, 0, 6], [0, 0, 0, 1, 0, 9, 8, 0, 0], [9, 0, 0, 0, 0, 5, 0, 7, 0], [0, 0, 0, 3, 9, 8, 6, 5, 0], [5, 0, 0, 6, 0, 1, 0, 9, 4]]
    }

    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++){
            const cell = document.getElementById([row+1,col+1].toString());
            if (new_grid[row][col] != 0) {
                cell.value = new_grid[row][col].toString();
                cell.disabled = true;
                cell.style.backgroundColor = "#d3d3d3";
            } else {
                cell.value = ""
                cell.disabled = false;
            }
        }
    }
    return new_grid 
}