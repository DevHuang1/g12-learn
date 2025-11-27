import { selectType } from "./types";
import { QuesDB } from "./types";
const quesDB: QuesDB = {
  "Can, Should, Must": [
    {
      id: 1,
      question: "You look tired. You ____ take a short rest.",
      answer: ["should"],
    },
    {
      id: 2,
      question: "Students ____ follow the school rules.",
      answer: ["must"],
    },
    { id: 3, question: "____ you help me carry this box?", answer: ["Can"] },
    {
      id: 4,
      question: "You ____ touch the animals in the zoo.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 5,
      question: "We ____ drink enough water every day.",
      answer: ["should"],
    },
    {
      id: 6,
      question: "He ____ wear his glasses while reading.",
      answer: ["should"],
    },
    {
      id: 7,
      question: "They ____ arrive late to the exam.",
      answer: ["must not", "mustn't"],
    },
    { id: 8, question: "____ I borrow your pencil?", answer: ["Can"] },
    { id: 9, question: "Drivers ____ stop at a red light.", answer: ["must"] },
    {
      id: 10,
      question: "You ____ eat too much sugar.",
      answer: ["should not", "shouldn't"],
    },

    {
      id: 11,
      question: "We ____ leave early to avoid traffic.",
      answer: ["should"],
    },
    {
      id: 12,
      question: "Children ____ play with fire.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 13,
      question: "He ____ practice every day to improve.",
      answer: ["should"],
    },
    { id: 14, question: "____ you open the window please?", answer: ["Can"] },
    {
      id: 15,
      question: "They ____ finish their project before Friday.",
      answer: ["must"],
    },
    {
      id: 16,
      question: "You ____ be rude to your classmates.",
      answer: ["should not", "shouldn't"],
    },
    {
      id: 17,
      question: "She ____ drink hot tea when she is sick.",
      answer: ["should"],
    },
    {
      id: 18,
      question: "We ____ recycle plastic bottles.",
      answer: ["should"],
    },
    {
      id: 19,
      question: "The students ____ raise their hands before speaking.",
      answer: ["must"],
    },
    { id: 20, question: "____ I sit here?", answer: ["Can"] },

    { id: 21, question: "He ____ take medicine on time.", answer: ["must"] },
    {
      id: 22,
      question: "You ____ forget to lock the door.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 23,
      question: "They ____ help their parents at home.",
      answer: ["should"],
    },
    { id: 24, question: "____ you pass me the salt?", answer: ["Can"] },
    {
      id: 25,
      question: "We ____ save money for emergencies.",
      answer: ["should"],
    },
    {
      id: 26,
      question: "She ____ shout in the classroom.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 27,
      question: "He ____ wear a helmet while skating.",
      answer: ["must"],
    },
    { id: 28, question: "You ____ be kind to animals.", answer: ["should"] },
    {
      id: 29,
      question: "Students ____ complete homework daily.",
      answer: ["must"],
    },
    { id: 30, question: "____ I join you for lunch?", answer: ["Can"] },

    {
      id: 31,
      question: "They ____ clean their desks after eating.",
      answer: ["should"],
    },
    {
      id: 32,
      question: "You ____ enter without permission.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 33,
      question: "He ____ listen carefully in class.",
      answer: ["must"],
    },
    {
      id: 34,
      question: "We ____ leave the lights on all night.",
      answer: ["should not", "shouldn't"],
    },
    { id: 35, question: "____ you explain this to me?", answer: ["Can"] },
    {
      id: 36,
      question: "She ____ bring her ID card to the exam.",
      answer: ["must"],
    },
    {
      id: 37,
      question: "You ____ check your work before submitting.",
      answer: ["should"],
    },
    {
      id: 38,
      question: "They ____ make noise in the hospital.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 39,
      question: "We ____ try our best in everything we do.",
      answer: ["should"],
    },
    { id: 40, question: "____ I take a picture here?", answer: ["Can"] },

    {
      id: 41,
      question: "He ____ wake up early for school.",
      answer: ["should"],
    },
    {
      id: 42,
      question: "Cyclists ____ use a light at night.",
      answer: ["must"],
    },
    {
      id: 43,
      question: "You ____ waste food.",
      answer: ["should not", "shouldn't"],
    },
    { id: 44, question: "____ you repeat that please?", answer: ["Can"] },
    { id: 45, question: "They ____ keep their promises.", answer: ["should"] },
    {
      id: 46,
      question: "We ____ run in the hallway.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 47,
      question: "She ____ take notes during the lecture.",
      answer: ["should"],
    },
    { id: 48, question: "Drivers ____ wear seatbelts.", answer: ["must"] },
    {
      id: 49,
      question: "You ____ interrupt when others are talking.",
      answer: ["should not", "shouldn't"],
    },
    { id: 50, question: "____ I see your homework?", answer: ["Can"] },

    {
      id: 51,
      question: "He ____ drink more water during hot weather.",
      answer: ["should"],
    },
    {
      id: 52,
      question: "We ____ talk loudly during a movie.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 53,
      question: "She ____ bring snacks for the trip.",
      answer: ["should"],
    },
    {
      id: 54,
      question: "You ____ cross the road carefully.",
      answer: ["must"],
    },
    { id: 55, question: "____ you lend me some money?", answer: ["Can"] },
    {
      id: 56,
      question: "They ____ finish their chores first.",
      answer: ["should"],
    },
    {
      id: 57,
      question: "You ____ lie to your friends.",
      answer: ["should not", "shouldn't"],
    },
    { id: 58, question: "He ____ follow the safety rules.", answer: ["must"] },
    {
      id: 59,
      question: "We ____ water the plants regularly.",
      answer: ["should"],
    },
    { id: 60, question: "____ I turn on the fan?", answer: ["Can"] },

    { id: 61, question: "She ____ be polite to everyone.", answer: ["should"] },
    {
      id: 62,
      question: "Students ____ cheat during an exam.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 63,
      question: "They ____ arrive early for practice.",
      answer: ["should"],
    },
    {
      id: 64,
      question: "You ____ wear a uniform to school.",
      answer: ["must"],
    },
    { id: 65, question: "____ you close the door?", answer: ["Can"] },
    {
      id: 66,
      question: "He ____ finish his meal before dessert.",
      answer: ["should"],
    },
    {
      id: 67,
      question: "We ____ shout at our parents.",
      answer: ["should not", "shouldn't"],
    },
    {
      id: 68,
      question: "She ____ follow the doctor's advice.",
      answer: ["must"],
    },
    {
      id: 69,
      question: "They ____ turn off the tap after use.",
      answer: ["should"],
    },
    { id: 70, question: "____ I leave class early?", answer: ["Can"] },

    {
      id: 71,
      question: "You ____ bully others.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 72,
      question: "He ____ practice math every day.",
      answer: ["should"],
    },
    {
      id: 73,
      question: "We ____ pay attention during lessons.",
      answer: ["must"],
    },
    {
      id: 74,
      question: "She ____ bring her lunch to school.",
      answer: ["should"],
    },
    { id: 75, question: "____ you help me find my keys?", answer: ["Can"] },
    {
      id: 76,
      question: "They ____ stay hydrated in summer.",
      answer: ["should"],
    },
    {
      id: 77,
      question: "You ____ forget your homework.",
      answer: ["must not", "mustn't"],
    },
    { id: 78, question: "Drivers ____ follow speed limits.", answer: ["must"] },
    { id: 79, question: "We ____ keep our room tidy.", answer: ["should"] },
    { id: 80, question: "____ I go with you?", answer: ["Can"] },

    {
      id: 81,
      question: "She ____ check the weather before going out.",
      answer: ["should"],
    },
    {
      id: 82,
      question: "He ____ feed the dog every morning.",
      answer: ["must"],
    },
    {
      id: 83,
      question: "You ____ stay up too late on school nights.",
      answer: ["should not", "shouldn't"],
    },
    { id: 84, question: "____ you carry this bag for me?", answer: ["Can"] },
    {
      id: 85,
      question: "They ____ share their toys with others.",
      answer: ["should"],
    },
    {
      id: 86,
      question: "We ____ smoke in public places.",
      answer: ["must not", "mustn't"],
    },
    { id: 87, question: "She ____ read more books.", answer: ["should"] },
    {
      id: 88,
      question: "You ____ follow the instructions carefully.",
      answer: ["must"],
    },
    {
      id: 89,
      question: "He ____ wear a jacket when it's cold.",
      answer: ["should"],
    },
    { id: 90, question: "____ I call you later?", answer: ["Can"] },

    {
      id: 91,
      question: "They ____ clean up after the party.",
      answer: ["should"],
    },
    {
      id: 92,
      question: "You ____ enter the lab without safety goggles.",
      answer: ["must not", "mustn't"],
    },
    {
      id: 93,
      question: "We ____ take care of our belongings.",
      answer: ["should"],
    },
    { id: 94, question: "She ____ finish the report today.", answer: ["must"] },
    { id: 95, question: "____ you teach me this lesson?", answer: ["Can"] },
    {
      id: 96,
      question: "He ____ drink coffee before sleeping.",
      answer: ["should not", "shouldn't"],
    },
    {
      id: 97,
      question: "They ____ take the dog for a walk.",
      answer: ["should"],
    },
    { id: 98, question: "You ____ follow all safety signs.", answer: ["must"] },
    { id: 99, question: "We ____ help people in need.", answer: ["should"] },
    { id: 100, question: "____ I open my gift now?", answer: ["Can"] },
  ],
  "Compound Nouns/Adjectives": [
    {
      id: 1,
      question:
        "He wiped the wet table with a (A. soft‑cloth napkin, B. rough‑sponge, C. old‑paper sheet).",
      answer: ["A"],
    },
    {
      id: 2,
      question:
        "She carried water in a (A. cracked‑clay pot, B. sealed‑plastic bottle, C. open‑wood bucket) during the hike.",
      answer: ["B"],
    },
    {
      id: 3,
      question:
        "They cooked rice in a (A. shallow‑tin pan, B. large‑metal pot, C. small‑glass bowl) for dinner.",
      answer: ["B"],
    },
    {
      id: 4,
      question:
        "He read a story under a (A. dim‑candle light, B. bright‑sun glare, C. soft‑moonlight) before sleeping.",
      answer: ["C"],
    },
    {
      id: 5,
      question:
        "She drew a picture using a (A. thin‑lead pencil, B. broad‑marker pen, C. soft‑chalk stick).",
      answer: ["A"],
    },
    {
      id: 6,
      question:
        "He cleaned the mirror with a (A. torn‑paper tissue, B. old‑dust rag, C. clean‑soft cloth) until it shone.",
      answer: ["C"],
    },
    {
      id: 7,
      question:
        "They rested on a (A. hard‑wood bench, B. soft‑foam cushion, C. cold‑stone floor) in the park.",
      answer: ["B"],
    },
    {
      id: 8,
      question:
        "She wore a (A. bright‑color scarf, B. dull‑grey coat, C. torn‑cloth hat) in the chilly morning.",
      answer: ["A"],
    },
    {
      id: 9,
      question:
        "He carried books in a (A. old‑cloth bag, B. leather‑bound satchel, C. small‑plastic folder) to school.",
      answer: ["B"],
    },
    {
      id: 10,
      question:
        "They hung clothes on a (A. broken‑wood peg, B. strong‑metal hanger, C. weak‑wire hook) in the closet.",
      answer: ["B"],
    },
    {
      id: 11,
      question:
        "She held a (A. cold‑metal cup, B. steaming‑hot mug, C. chipped‑ceramic bowl) of tea in winter.",
      answer: ["B"],
    },
    {
      id: 12,
      question:
        "He put the letter in a (A. torn‑cloth bag, B. open‑wood box, C. sealed‑paper envelope) before mailing it.",
      answer: ["C"],
    },
    {
      id: 13,
      question:
        "They walked under a (A. cloud‑dark sky, B. star‑filled night, C. rain‑heavy storm) after sunset.",
      answer: ["B"],
    },
    {
      id: 14,
      question:
        "She carried a (A. fold‑able umbrella, B. long‑wood stick, C. heavy‑iron cane) during the sudden rain.",
      answer: ["A"],
    },
    {
      id: 15,
      question:
        "He baked bread in a (A. wood‑fired oven, B. electric‑microwave box, C. gas‑heat stove) late at night.",
      answer: ["A"],
    },
    {
      id: 16,
      question:
        "She stored seeds in a (A. wet‑humid bag, B. dry‑cool box, C. open‑air jar) to keep them fresh.",
      answer: ["B"],
    },
    {
      id: 17,
      question:
        "He wore (A. thin‑cloth sandals, B. sturdy‑leather boots, C. old‑rubber slippers) while working outside.",
      answer: ["B"],
    },
    {
      id: 18,
      question:
        "They drank coffee from a (A. steaming‑hot cup, B. chipped‑ceramic bowl, C. cold‑glass mug) before sunrise.",
      answer: ["A"],
    },
    {
      id: 19,
      question:
        "She wrote in a (A. torn‑old page, B. well‑lined notebook, C. blank‑rough sheet) during the lecture.",
      answer: ["B"],
    },
    {
      id: 20,
      question:
        "He fixed the chair with a (A. weak‑wood nail, B. old‑rust bolt, C. sturdy‑steel screw) from the toolbox.",
      answer: ["C"],
    },
    {
      id: 21,
      question:
        "They walked along a (A. narrow‑mud trail, B. wide‑paved road, C. rough‑rock path) in the sunny afternoon.",
      answer: ["B"],
    },
    {
      id: 22,
      question:
        "She painted a (A. blank‑stone slab, B. bright‑wall mural, C. dull‑wood panel) on the school wall.",
      answer: ["B"],
    },
    {
      id: 23,
      question:
        "He pressed a (A. power‑switch button, B. weak‑wire lever, C. old‑rust handle) to start the machine.",
      answer: ["A"],
    },
    {
      id: 24,
      question:
        "They hunted fish using a (A. broken‑wood rod, B. strong‑net trap, C. thin‑string line) near the river.",
      answer: ["B"],
    },
    {
      id: 25,
      question:
        "She closed the door with a (A. loud‑metal latch, B. soft‑click lock, C. broken‑weak handle) late at night.",
      answer: ["B"],
    },
    {
      id: 26,
      question:
        "He carried luggage in a (A. simple‑cloth bag, B. heavy‑wood box, C. rolling‑wheeled suitcase) at the airport.",
      answer: ["C"],
    },
    {
      id: 27,
      question:
        "They drove a (A. fuel‑efficient car, B. small‑electric bike, C. heavy‑diesel truck) to save money.",
      answer: ["A"],
    },
    {
      id: 28,
      question:
        "She walked barefoot on a (A. hard‑stone ground, B. rough‑wood deck, C. soft‑grass lawn) early in the morning.",
      answer: ["C"],
    },
    {
      id: 29,
      question:
        "He hung a (A. faded‑old flag, B. bright‑color banner, C. plain‑white cloth) outside the shop.",
      answer: ["B"],
    },
    {
      id: 30,
      question:
        "They watched the sunset from a (A. roof‑top balcony, B. narrow‑street window, C. dusty‑backyard yard).",
      answer: ["A"],
    },
    {
      id: 31,
      question:
        "She packed gifts in a (A. torn‑old sack, B. decorated‑gift box, C. plain‑plain bag) for the party.",
      answer: ["B"],
    },
    {
      id: 32,
      question:
        "He drew lines on a (A. faded‑old paper, B. small‑cracked sheet, C. wide‑blank chart) for the diagram.",
      answer: ["C"],
    },
    {
      id: 33,
      question:
        "They built a (A. weak‑wood shed, B. plain‑mud hut, C. well‑designed house) on the land.",
      answer: ["C"],
    },
    {
      id: 34,
      question:
        "She kept jewelry in a (A. velvet‑lined box, B. open‑wood case, C. torn‑paper pouch) for safety.",
      answer: ["A"],
    },
    {
      id: 35,
      question:
        "He cooked soup in a (A. flat‑tin plate, B. deep‑glass bowl, C. small‑ceramic cup) for supper.",
      answer: ["B"],
    },
    {
      id: 36,
      question:
        "They passed by a (A. crowded‑city street, B. dusty‑old road, C. empty‑rural lane) on their way home.",
      answer: ["A"],
    },
    {
      id: 37,
      question:
        "She held a (A. cold‑water cone, B. soft‑ice cream, C. warm‑milk shake) in the hot weather.",
      answer: ["B"],
    },
    {
      id: 38,
      question:
        "He wore a (A. bright‑color mask, B. dull‑cloth cover, C. torn‑paper sheet) to hide his face.",
      answer: ["A"],
    },
    {
      id: 39,
      question:
        "They used a (A. heavy‑duty lock, B. weak‑chain key, C. plastic‑pad latch) to secure the gate.",
      answer: ["A"],
    },
    {
      id: 40,
      question:
        "She walked on a (A. soft‑grass lawn, B. hard‑stone ground, C. rough‑wood deck) early in the morning.",
      answer: ["A"],
    },
    {
      id: 41,
      question:
        "He bought a (A. used‑old handset, B. cheap‑plastic model, C. brand‑new phone) from the shop.",
      answer: ["C"],
    },
    {
      id: 42,
      question:
        "They picked fruits from a (A. tall‑leaf tree, B. short‑old shrub, C. weak‑thin plant) in the orchard.",
      answer: ["A"],
    },
    {
      id: 43,
      question:
        "She placed flowers in a (A. dull‑ceramic bowl, B. clear‑glass vase, C. old‑wood jar) on the shelf.",
      answer: ["B"],
    },
    {
      id: 44,
      question:
        "He hung clothes on a (A. weak‑wire hook, B. broken‑wood peg, C. strong‑metal hanger) in the closet.",
      answer: ["C"],
    },
    {
      id: 45,
      question:
        "They cooked dinner in a (A. small‑pan stove, B. thin‑tin pot, C. large‑pot cooker).",
      answer: ["C"],
    },
    {
      id: 46,
      question:
        "She read a story on a (A. soft‑cotton bed, B. hard‑wood floor, C. cold‑stone bench) before sleeping.",
      answer: ["A"],
    },
    {
      id: 47,
      question:
        "He cleaned the floor with a (A. long‑stretch cloth, B. short‑thin rag, C. worn‑old towel).",
      answer: ["A"],
    },
    {
      id: 48,
      question:
        "They drank tea from (A. steaming‑hot cups, B. cold‑glass mugs, C. chipped‑earthen bowls) on a chilly evening.",
      answer: ["A"],
    },
    {
      id: 49,
      question:
        "She sat on a (A. hard‑wood seat, B. soft‑foam cushion, C. flat‑stone bench) in the living room.",
      answer: ["B"],
    },
    {
      id: 50,
      question:
        "He cooked soup in a (A. deep‑glass bowl, B. flat‑tin plate, C. small‑ceramic cup) for supper.",
      answer: ["A"],
    },
    {
      id: 51,
      question:
        "To let fresh air in, she opened the window using a (A. rusty‑metal handle, B. clean‑wood latch, C. broken‑glass knob).",
      answer: ["B"],
    },
    {
      id: 52,
      question:
        "He poured water from a (A. leaking‑plastic can, B. sturdy‑metal can, C. small‑glass jar) onto the plants.",
      answer: ["B"],
    },
    {
      id: 53,
      question:
        "They safely crossed a (A. slippery‑stone path, B. firm‑concrete bridge, C. muddy‑trail) over the stream.",
      answer: ["B"],
    },
    {
      id: 54,
      question:
        "During the class, she drew shapes on a (A. blank‑whiteboard, B. torn‑paper sheet, C. dusty‑chalkboard).",
      answer: ["A"],
    },
    {
      id: 55,
      question:
        "For safety, he kept money inside a (A. cracked‑plastic wallet, B. leather‑pouch, C. old‑cloth bag).",
      answer: ["B"],
    },
    {
      id: 56,
      question:
        "They cooked the meat using a (A. hot‑metal pan, B. cold‑ceramic bowl, C. small‑wood box).",
      answer: ["A"],
    },
    {
      id: 57,
      question:
        "He read the letter under (A. dim‑candle light, B. bright‑sunlight, C. faint‑moonlight).",
      answer: ["B"],
    },
    {
      id: 58,
      question:
        "To keep his hands warm, he wore gloves made of (A. soft‑leather, B. thin‑paper, C. rough‑cloth).",
      answer: ["A"],
    },
    {
      id: 59,
      question:
        "They pulled the heavy box using a (A. weak‑rope, B. strong‑metal chain, C. old‑wire).",
      answer: ["B"],
    },
    {
      id: 60,
      question:
        "She drank water from a (A. clean‑glass, B. cracked‑bottle, C. chipped‑mug) while hiking.",
      answer: ["A"],
    },
    {
      id: 61,
      question:
        "He fixed the fence with (A. weak‑wood posts, B. sturdy‑iron rods, C. torn‑cloth strips).",
      answer: ["B"],
    },
    {
      id: 62,
      question:
        "In the afternoon, they rested under a (A. shady‑tree, B. hot‑sunlight, C. cold‑stone roof).",
      answer: ["A"],
    },
    {
      id: 63,
      question:
        "She decorated the wall with (A. bright‑color paint, B. faded‑old dye, C. dull‑chalk).",
      answer: ["A"],
    },
    {
      id: 64,
      question:
        "He took notes using a (A. thin‑pen, B. thick‑marker, C. soft‑chalk) on the sheet.",
      answer: ["A"],
    },
    {
      id: 65,
      question:
        "They wiped the windows with a (A. dry‑cloth, B. wet‑rag, C. old‑paper) until they were clear.",
      answer: ["B"],
    },
    {
      id: 66,
      question:
        "Vegetables were cooked in a (A. large‑metal pot, B. tiny‑ceramic cup, C. shallow‑tin pan).",
      answer: ["A"],
    },
    {
      id: 67,
      question:
        "Books were carried in a (A. torn‑cloth bag, B. sturdy‑leather satchel, C. small‑plastic folder) to class.",
      answer: ["B"],
    },
    {
      id: 68,
      question:
        "A (A. faded‑banner, B. bright‑poster, C. torn‑sheet) was hung on the wall.",
      answer: ["B"],
    },
    {
      id: 69,
      question:
        "Early in the morning, she walked barefoot on (A. soft‑grass, B. rough‑stone, C. cold‑wood).",
      answer: ["A"],
    },
    {
      id: 70,
      question:
        "The chair was repaired using a (A. weak‑nail, B. sturdy‑screw, C. old‑bolt).",
      answer: ["B"],
    },
    {
      id: 71,
      question:
        "Tea was poured into (A. steaming‑cups, B. chipped‑bowls, C. cold‑glasses) on a chilly evening.",
      answer: ["A"],
    },
    {
      id: 72,
      question:
        "The door was opened with a (A. rusty‑metal knob, B. clean‑wood latch, C. broken‑glass handle).",
      answer: ["B"],
    },
    {
      id: 73,
      question:
        "Notes were written using a (A. dull‑pen, B. sharp‑pencil, C. thick‑chalk).",
      answer: ["B"],
    },
    {
      id: 74,
      question:
        "In the park, they rested on a (A. hard‑bench, B. soft‑cushion, C. cold‑stone seat).",
      answer: ["B"],
    },
    {
      id: 75,
      question:
        "Seeds were stored in a (A. wet‑bag, B. dry‑box, C. open‑jar) to keep them fresh.",
      answer: ["B"],
    },
    {
      id: 76,
      question:
        "He moved luggage in a (A. simple‑bag, B. heavy‑box, C. rolling‑suitcase) through the airport.",
      answer: ["C"],
    },
    {
      id: 77,
      question:
        "Dinner was cooked in a (A. small‑stove, B. thin‑pot, C. large‑cooker).",
      answer: ["C"],
    },
    {
      id: 78,
      question:
        "She created a picture using a (A. thin‑pencil, B. broad‑marker, C. soft‑chalk).",
      answer: ["A"],
    },
    {
      id: 79,
      question:
        "The floor was cleaned with a (A. long‑cloth, B. short‑rag, C. worn‑towel).",
      answer: ["A"],
    },
    {
      id: 80,
      question:
        "To save money, they drove a (A. fuel‑efficient car, B. electric‑bike, C. diesel‑truck).",
      answer: ["A"],
    },
    {
      id: 81,
      question:
        "On the wall, she painted a (A. blank‑slab, B. bright‑mural, C. dull‑panel).",
      answer: ["B"],
    },
    {
      id: 82,
      question:
        "Warmth was ensured by wearing gloves of (A. soft‑leather, B. thin‑paper, C. rough‑cloth).",
      answer: ["A"],
    },
    {
      id: 83,
      question:
        "Fruits were picked from a (A. tall‑tree, B. short‑shrub, C. weak‑plant) in the orchard.",
      answer: ["A"],
    },
    {
      id: 84,
      question:
        "Flowers were arranged in a (A. dull‑bowl, B. clear‑vase, C. old‑jar).",
      answer: ["B"],
    },
    {
      id: 85,
      question:
        "Clothes were hung on a (A. weak‑hook, B. broken‑peg, C. strong‑hanger) in the closet.",
      answer: ["C"],
    },
    {
      id: 86,
      question:
        "They walked safely over a (A. slippery‑path, B. firm‑bridge, C. muddy‑trail).",
      answer: ["B"],
    },
    {
      id: 87,
      question:
        "She read a story by (A. dim‑candle, B. bright‑sun, C. faint‑moon) light.",
      answer: ["B"],
    },
    {
      id: 88,
      question:
        "From the shop, he bought a (A. used‑handset, B. cheap‑plastic model, C. brand‑new phone).",
      answer: ["C"],
    },
    {
      id: 89,
      question:
        "A (A. faded‑flag, B. bright‑banner, C. torn‑sheet) was hung outside the shop.",
      answer: ["B"],
    },
    {
      id: 90,
      question:
        "On a hot day, she held a (A. cold‑cone, B. soft‑ice cream, C. warm‑shake).",
      answer: ["B"],
    },
    {
      id: 91,
      question:
        "The fence was secured with (A. weak‑wood, B. sturdy‑iron, C. torn‑cloth) rods.",
      answer: ["B"],
    },
    {
      id: 92,
      question:
        "They sat beneath a (A. shady‑tree, B. hot‑sun, C. cold‑roof) in the afternoon.",
      answer: ["A"],
    },
    {
      id: 93,
      question:
        "To get fresh air, she opened the window using a (A. rusty‑handle, B. clean‑latch, C. broken‑knob).",
      answer: ["B"],
    },
    {
      id: 94,
      question:
        "Notes were written with a (A. thin‑pen, B. thick‑marker, C. soft‑chalk).",
      answer: ["A"],
    },
    {
      id: 95,
      question:
        "The windows were wiped using a (A. dry‑cloth, B. wet‑rag, C. old‑paper) until clean.",
      answer: ["B"],
    },
    {
      id: 96,
      question:
        "Vegetables were cooked inside a (A. large‑pot, B. tiny‑cup, C. shallow‑pan).",
      answer: ["A"],
    },
    {
      id: 97,
      question:
        "Books were carried in a (A. torn‑bag, B. sturdy‑satchel, C. small‑folder).",
      answer: ["B"],
    },
    {
      id: 98,
      question:
        "Early morning, they walked barefoot on (A. soft‑grass, B. rough‑stone, C. cold‑wood).",
      answer: ["A"],
    },
    {
      id: 99,
      question:
        "To stay fresh, seeds were kept in a (A. wet‑bag, B. dry‑box, C. open‑jar).",
      answer: ["B"],
    },
    {
      id: 100,
      question:
        "He moved his luggage using a (A. simple‑bag, B. heavy‑box, C. rolling‑suitcase) at the airport.",
      answer: ["C"],
    },
  ],
};

const selectUnits: selectType[] = [
  {
    unit: "Unit1",
    lessons: ["Compound Nouns/Adjectives", "Can, Should, Must"],
  },
  {
    unit: "Unit2",
    lessons: ["Synonyms", "Relative Clauses"],
  },
  {
    unit: "Unit3",
    lessons: [
      "Affixes in English",
      "Participle Phrases",
      "It is/ It was",
      "Not only ... but also",
    ],
  },
  {
    unit: "Unit4",
    lessons: ["-ed and -ing adjectives", "Adjectives with prepositions"],
  },
  {
    unit: "Unit5",
    lessons: [
      "Colour idioms",
      "Subordinating conjunctions in adverbial clauses",
    ],
  },
];

export default { quesDB, selectUnits };
