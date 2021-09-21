import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import * as cards from "./cards";
import motylek from "./motylek.png";
import useStore from "./store";
export default function CardsFlip() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const [revealed, setRevealed] = useState([]);
  const [found, setFound] = useState([]);
  const [deck, setDeck] = useState([]);
  const increasePoints = useStore((state) => state.increasePoints);
  const points = useStore((state) => state.points);
  const [currentCard, setCurrentCard] = useState();
  // shuffle array and add it to new const
  console.log(revealed);
  useEffect(() => {
    const firstDeck = cards.cards;
    shuffleArray(firstDeck);
    setDeck(firstDeck);
  }, []);

  useEffect(() => {
    revealed.length > 2 &&
      revealed[0][1] === revealed[1][1] &&
      setFound((oldArray) => [...oldArray, revealed[0], revealed[1]]);
    revealed.length > 2 && setRevealed([currentCard]);
  }, [revealed]);
  console.log("i found", found);

  return (
    <Grid container>
      {deck.map((card) => {
        return (
          <Grid
            onClick={() => {
              setCurrentCard(card);
              increasePoints();
              !revealed.includes(card) &&
                setRevealed((oldArray) => [...oldArray, card]);
              // add item to checker to compare with other one
            }}
            item
            xs={3}
            key={card[0]}
            pt={2}
            className="flip-card"
          >
            <Box position="relative" className="flip-card-inner" height="20vw">
              <Box
                position="absolute"
                ml="auto"
                mr="auto"
                left="0"
                right="0"
                className={
                  found.includes(card)
                    ? "hop"
                    : revealed.includes(card)
                    ? " hop"
                    : " hip"
                }
              >
                <div className="coin-front">
                  <img src={motylek} className="motylek" alt="logo" />
                </div>
              </Box>
              <Box
                position="absolute"
                position="absolute"
                ml="auto"
                mr="auto"
                left="0"
                right="0"
                className={
                  found.includes(card)
                    ? "hip"
                    : revealed.includes(card)
                    ? " hip"
                    : " hop"
                }
              >
                <div className="coin-back ">
                  <img src={card[1]} className="nagroda" alt="logo" />
                </div>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
