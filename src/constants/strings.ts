export const GAME_TITLE = "Wordle: Baby VanHorn"
export const WIN_MESSAGE = 'Great Job! We hope you are as excited to meet Quinn as we are!'
export const WIN_MESSAGE_MIDDLE_NAME = 'Thanks for playing!'
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = 'Name(s) not found in list'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Sorry! Her name is going to be........ ${solution} !!!`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const SPACEBAR_TEXT = 'Space'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New word in'
export const SHARE_TEXT = 'Share'
export const MIDDLE_NAME_TEXT = 'What about a middle name?'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
