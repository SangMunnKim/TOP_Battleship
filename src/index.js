import "./styles.css";
import { gameboard } from "./components/gameboard";
import { Ship } from "./components/battleship";

const board = gameboard();

const ship_1 = new Ship(3);
const ship_2 = new Ship(4);

board.placeShip(ship_1, 0, 0, 'horizontal');
board.placeShip(ship_2, 2, 2, 'vertical');

board.render();