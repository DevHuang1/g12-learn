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
  Synonyms: [
    {
      id: 1,
      question: "Synonym of 'happy' is j____",
      answer: ["joyful", "jolly"],
    },
    {
      id: 2,
      question: "Synonym of 'sad' is u____",
      answer: ["unhappy"],
    },
    {
      id: 3,
      question: "Synonym of 'angry' is m____",
      answer: ["mad"],
    },
    {
      id: 4,
      question: "Synonym of 'fast' is q____",
      answer: ["quick"],
    },
    {
      id: 5,
      question: "Synonym of 'big' is l____",
      answer: ["large"],
    },
    {
      id: 6,
      question: "Synonym of 'small' is t____",
      answer: ["tiny"],
    },
    {
      id: 7,
      question: "Synonym of 'smart' is i____",
      answer: ["intelligent"],
    },
    {
      id: 8,
      question: "Synonym of 'easy' is s____",
      answer: ["simple"],
    },
    {
      id: 9,
      question: "Synonym of 'hard' is d____",
      answer: ["difficult"],
    },
    {
      id: 10,
      question: "Synonym of 'funny' is h____",
      answer: ["hilarious"],
    },
    {
      id: 11,
      question: "Synonym of 'rich' is w____",
      answer: ["wealthy"],
    },
    {
      id: 12,
      question: "Synonym of 'poor' is n____",
      answer: ["needy"],
    },
    {
      id: 13,
      question: "Synonym of 'strong' is p____",
      answer: ["powerful"],
    },
    {
      id: 14,
      question: "Synonym of 'weak' is f____",
      answer: ["feeble"],
    },
    {
      id: 15,
      question: "Synonym of 'clean' is n____",
      answer: ["neat"],
    },
    {
      id: 16,
      question: "Synonym of 'dirty' is f____",
      answer: ["filthy"],
    },
    {
      id: 17,
      question: "Synonym of 'quiet' is s____",
      answer: ["silent"],
    },
    {
      id: 18,
      question: "Synonym of 'loud' is n____",
      answer: ["noisy"],
    },
    {
      id: 19,
      question: "Synonym of 'thin' is s____",
      answer: ["slim", "skinny", "slender"],
    },
    {
      id: 20,
      question: "Synonym of 'fat' is o____",
      answer: ["obese"],
    },
    {
      id: 21,
      question: "Synonym of 'begin' is s____",
      answer: ["start"],
    },
    {
      id: 22,
      question: "Synonym of 'end' is f____",
      answer: ["finish"],
    },
    {
      id: 23,
      question: "Synonym of 'buy' is p____",
      answer: ["purchase"],
    },
    {
      id: 24,
      question: "Synonym of 'help' is a____",
      answer: ["assist"],
    },
    {
      id: 25,
      question: "Synonym of 'look' is g____",
      answer: ["gaze"],
    },
    {
      id: 26,
      question: "Synonym of 'walk' is s____",
      answer: ["stroll"],
    },
    {
      id: 27,
      question: "Synonym of 'run' is s____",
      answer: ["sprint"],
    },
    {
      id: 28,
      question: "Synonym of 'see' is v____",
      answer: ["view"],
    },
    {
      id: 29,
      question: "Synonym of 'talk' is s____",
      answer: ["speak"],
    },
    {
      id: 30,
      question: "Synonym of 'jump' is l____",
      answer: ["leap"],
    },
    {
      id: 31,
      question: "Synonym of 'sit' is p____",
      answer: ["perch"],
    },
    {
      id: 32,
      question: "Synonym of 'throw' is t____",
      answer: ["toss"],
    },
    {
      id: 33,
      question: "Synonym of 'build' is c____",
      answer: ["construct"],
    },
    {
      id: 34,
      question: "Synonym of 'fix' is r____",
      answer: ["repair"],
    },
    {
      id: 35,
      question: "Synonym of 'choose' is s____",
      answer: ["select"],
    },
    {
      id: 36,
      question: "Synonym of 'cut' is s____",
      answer: ["slice"],
    },
    {
      id: 37,
      question: "Synonym of 'cry' is w____",
      answer: ["weep"],
    },
    {
      id: 38,
      question: "Synonym of 'smile' is g____",
      answer: ["grin"],
    },
    {
      id: 39,
      question: "Synonym of 'angry' is f____",
      answer: ["furious"],
    },
    {
      id: 40,
      question: "Synonym of 'tired' is e____",
      answer: ["exhausted"],
    },
    {
      id: 41,
      question: "Synonym of 'sleepy' is d____",
      answer: ["drowsy"],
    },
    {
      id: 42,
      question: "Synonym of 'hungry' is s____",
      answer: ["starving"],
    },
    {
      id: 43,
      question: "Synonym of 'thirsty' is p____",
      answer: ["parched"],
    },
    {
      id: 44,
      question: "Synonym of 'bright' is s____",
      answer: ["shiny"],
    },
    {
      id: 45,
      question: "Synonym of 'dark' is d____",
      answer: ["dim"],
    },
    {
      id: 46,
      question: "Synonym of 'brave' is c____",
      answer: ["courageous"],
    },
    {
      id: 47,
      question: "Synonym of 'lazy' is i____",
      answer: ["idle"],
    },
    {
      id: 48,
      question: "Synonym of 'scared' is a____",
      answer: ["afraid"],
    },
    {
      id: 49,
      question: "Synonym of 'quick' is r____",
      answer: ["rapid"],
    },
    {
      id: 50,
      question: "Synonym of 'honest' is t____",
      answer: ["truthful"],
    },
    {
      id: 51,
      question: "Synonym of 'rude' is i____",
      answer: ["impolite"],
    },
    {
      id: 52,
      question: "Synonym of 'polite' is c____",
      answer: ["courteous"],
    },
    {
      id: 53,
      question: "Synonym of 'fear' is f____",
      answer: ["fright"],
    },
    {
      id: 54,
      question: "Synonym of 'friend' is p____",
      answer: ["pal"],
    },
    {
      id: 55,
      question: "Synonym of 'teacher' is i____",
      answer: ["instructor"],
    },
    {
      id: 56,
      question: "Synonym of 'danger' is r____",
      answer: ["risk"],
    },
    {
      id: 57,
      question: "Synonym of 'gift' is p____",
      answer: ["present"],
    },
    {
      id: 58,
      question: "Synonym of 'story' is t____",
      answer: ["tale"],
    },
    {
      id: 59,
      question: "Synonym of 'job' is o____",
      answer: ["occupation"],
    },
    {
      id: 60,
      question: "Synonym of 'house' is h____",
      answer: ["home"],
    },
    {
      id: 61,
      question: "Synonym of 'answer' is r____",
      answer: ["reply"],
    },
    {
      id: 62,
      question: "Synonym of 'question' is q____",
      answer: ["query"],
    },
    {
      id: 63,
      question: "Synonym of 'safe' is s____",
      answer: ["secure"],
    },
    {
      id: 64,
      question: "Synonym of 'dangerous' is h____",
      answer: ["hazardous"],
    },
    {
      id: 65,
      question: "Synonym of 'win' is v____",
      answer: ["victory"],
    },
    {
      id: 66,
      question: "Synonym of 'lose' is f____",
      answer: ["fail"],
    },
    {
      id: 67,
      question: "Synonym of 'change' is a____",
      answer: ["alter"],
    },
    {
      id: 68,
      question: "Synonym of 'copy' is r____",
      answer: ["replicate"],
    },
    {
      id: 69,
      question: "Synonym of 'stop' is h____",
      answer: ["halt"],
    },
    {
      id: 70,
      question: "Synonym of 'move' is s____",
      answer: ["shift"],
    },
    {
      id: 71,
      question: "Synonym of 'angry' is i____",
      answer: ["irritated"],
    },
    {
      id: 72,
      question: "Synonym of 'beautiful' is p____",
      answer: ["pretty"],
    },
    {
      id: 73,
      question: "Synonym of 'ugly' is u____",
      answer: ["unattractive"],
    },
    {
      id: 74,
      question: "Synonym of 'sad' is m____",
      answer: ["miserable"],
    },
    {
      id: 75,
      question: "Synonym of 'cold' is c____",
      answer: ["chilly"],
    },
    {
      id: 76,
      question: "Synonym of 'hot' is w____",
      answer: ["warm"],
    },
    {
      id: 77,
      question: "Synonym of 'old' is a____",
      answer: ["aged"],
    },
    {
      id: 78,
      question: "Synonym of 'young' is y____",
      answer: ["youthful"],
    },
    {
      id: 79,
      question: "Synonym of 'quickly' is s____",
      answer: ["swiftly"],
    },
    {
      id: 80,
      question: "Synonym of 'slowly' is g____",
      answer: ["gradually"],
    },
    {
      id: 81,
      question: "Synonym of 'calm' is p____",
      answer: ["peaceful"],
    },
    {
      id: 82,
      question: "Synonym of 'lucky' is f____",
      answer: ["fortunate"],
    },
    {
      id: 83,
      question: "Synonym of 'unlucky' is u____",
      answer: ["unfortunate"],
    },
    {
      id: 84,
      question: "Synonym of 'neat' is o____",
      answer: ["organized"],
    },
    {
      id: 85,
      question: "Synonym of 'messy' is u____",
      answer: ["untidy"],
    },
    {
      id: 86,
      question: "Synonym of 'kind' is g____",
      answer: ["gentle"],
    },
    {
      id: 87,
      question: "Synonym of 'mean' is c____",
      answer: ["cruel"],
    },
    {
      id: 88,
      question: "Synonym of 'truth' is f____",
      answer: ["fact"],
    },
    {
      id: 89,
      question: "Synonym of 'lie' is f____",
      answer: ["falsehood"],
    },
    {
      id: 90,
      question: "Synonym of 'start' is b____",
      answer: ["begin"],
    },
    {
      id: 91,
      question: "Synonym of 'finish' is e____",
      answer: ["end"],
    },
    {
      id: 92,
      question: "Synonym of 'brave' is v____",
      answer: ["valiant"],
    },
    {
      id: 93,
      question: "Synonym of 'scary' is f____",
      answer: ["frightening"],
    },
    {
      id: 94,
      question: "Synonym of 'healthy' is f____",
      answer: ["fit"],
    },
    {
      id: 95,
      question: "Synonym of 'sick' is i____",
      answer: ["ill"],
    },
    {
      id: 96,
      question: "Synonym of 'helpful' is s____",
      answer: ["supportive"],
    },
    {
      id: 97,
      question: "Synonym of 'enemy' is f____",
      answer: ["foe"],
    },
    {
      id: 98,
      question: "Synonym of 'animal' is c____",
      answer: ["creature"],
    },
    {
      id: 99,
      question: "Synonym of 'clothes' is g____",
      answer: ["garments"],
    },
    {
      id: 100,
      question: "Synonym of 'quick' is b____",
      answer: ["brisk"],
    },
  ],
  "Relative Clauses": [
    {
      id: 1,
      question: "I invited my aunt. She lives in Singapore.",
      answer: [
        "I invited my aunt, who lives in Singapore.",
        "I invited the aunt who lives in Singapore.",
      ],
    },
    {
      id: 2,
      question: "I bought a pen. It writes smoothly.",
      answer: [
        "I bought a pen that writes smoothly.",
        "I bought a pen which writes smoothly.",
      ],
    },
    {
      id: 3,
      question: "My brother is a doctor. He moved to Australia.",
      answer: ["My brother, who is a doctor, moved to Australia."],
    },
    {
      id: 4,
      question: "The school is very old. I studied there.",
      answer: [
        "The school where I studied is very old.",
        "The school, where I studied, is very old.",
      ],
    },
    {
      id: 5,
      question: "This is the man. You met him yesterday.",
      answer: [
        "This is the man whom you met yesterday.",
        "This is the man who you met yesterday.",
        "This is the man that you met yesterday.",
      ],
    },
    {
      id: 6,
      question: "She bought a dress. It was very expensive.",
      answer: [
        "She bought a dress that was very expensive.",
        "She bought a dress which was very expensive.",
      ],
    },
    {
      id: 7,
      question: "My mother cooked a meal. It tasted amazing.",
      answer: [
        "My mother cooked a meal that tasted amazing.",
        "My mother cooked a meal which tasted amazing.",
      ],
    },
    {
      id: 8,
      question: "The car broke down. I rented it last week.",
      answer: [
        "The car that I rented last week broke down.",
        "The car, which I rented last week, broke down.",
      ],
    },
    {
      id: 9,
      question: "I saw a girl. She was crying.",
      answer: ["I saw a girl who was crying.", "I saw a girl that was crying."],
    },
    {
      id: 10,
      question: "I visited the town. My parents were born there.",
      answer: [
        "I visited the town where my parents were born.",
        "I visited the town, where my parents were born.",
      ],
    },
    {
      id: 11,
      question: "He hired a driver. The driver speaks four languages.",
      answer: [
        "He hired a driver who speaks four languages.",
        "He hired a driver that speaks four languages.",
      ],
    },
    {
      id: 12,
      question: "My teacher gave me advice. It helped a lot.",
      answer: [
        "My teacher gave me advice that helped a lot.",
        "My teacher gave me advice which helped a lot.",
      ],
    },
    {
      id: 13,
      question: "The restaurant was crowded. We ate there.",
      answer: ["The restaurant where we ate was crowded."],
    },
    {
      id: 14,
      question: "He lost the watch. His father gave it to him.",
      answer: [
        "He lost the watch that his father gave him.",
        "He lost the watch which his father gave him.",
      ],
    },
    {
      id: 15,
      question: "The boy is my cousin. He won the competition.",
      answer: [
        "The boy who won the competition is my cousin.",
        "The boy that won the competition is my cousin.",
      ],
    },
    {
      id: 16,
      question: "She showed me a picture. Her sister drew it.",
      answer: [
        "She showed me a picture that her sister drew.",
        "She showed me a picture which her sister drew.",
      ],
    },
    {
      id: 17,
      question: "This is my uncle. He taught me math.",
      answer: [
        "This is my uncle who taught me math.",
        "This is my uncle that taught me math.",
      ],
    },
    {
      id: 18,
      question: "I read a story. It was very touching.",
      answer: [
        "I read a story that was very touching.",
        "I read a story which was very touching.",
      ],
    },
    {
      id: 19,
      question: "The phone is new. I bought it last week.",
      answer: [
        "The phone that I bought last week is new.",
        "The phone, which I bought last week, is new.",
      ],
    },
    {
      id: 20,
      question: "She met a man. His house is near mine.",
      answer: ["She met a man whose house is near mine."],
    },

    {
      id: 21,
      question: "I found the keys. You lost them.",
      answer: [
        "I found the keys that you lost.",
        "I found the keys which you lost.",
      ],
    },
    {
      id: 22,
      question: "My aunt visited a museum. It opened recently.",
      answer: [
        "My aunt visited a museum that opened recently.",
        "My aunt visited a museum which opened recently.",
      ],
    },
    {
      id: 23,
      question: "This is the teacher. I told you about him.",
      answer: [
        "This is the teacher whom I told you about.",
        "This is the teacher who I told you about.",
        "This is the teacher that I told you about.",
      ],
    },
    {
      id: 24,
      question: "The girl is polite. Her mother is my friend.",
      answer: ["The girl whose mother is my friend is polite."],
    },
    {
      id: 25,
      question: "She works in a company. It makes software.",
      answer: [
        "She works in a company that makes software.",
        "She works in a company which makes software.",
      ],
    },
    {
      id: 26,
      question: "He bought a house. It has a big garden.",
      answer: [
        "He bought a house that has a big garden.",
        "He bought a house which has a big garden.",
      ],
    },
    {
      id: 27,
      question: "I visited the park. We used to play there.",
      answer: ["I visited the park where we used to play."],
    },
    {
      id: 28,
      question: "The man shouted. His dog was lost.",
      answer: ["The man whose dog was lost shouted."],
    },
    {
      id: 29,
      question: "I watched a movie. You recommended it.",
      answer: [
        "I watched the movie that you recommended.",
        "I watched the movie which you recommended.",
      ],
    },
    {
      id: 30,
      question: "She answered the question. It was very difficult.",
      answer: [
        "She answered the question that was very difficult.",
        "She answered the question which was very difficult.",
      ],
    },

    {
      id: 31,
      question: "The laptop is broken. I bought it yesterday.",
      answer: [
        "The laptop that I bought yesterday is broken.",
        "The laptop, which I bought yesterday, is broken.",
      ],
    },
    {
      id: 32,
      question: "My father met a man. He works with my uncle.",
      answer: [
        "My father met a man who works with my uncle.",
        "My father met a man that works with my uncle.",
      ],
    },
    {
      id: 33,
      question: "We visited a village. My grandmother grew up there.",
      answer: ["We visited the village where my grandmother grew up."],
    },
    {
      id: 34,
      question: "The book is long. I am reading it.",
      answer: [
        "The book that I am reading is long.",
        "The book which I am reading is long.",
      ],
    },
    {
      id: 35,
      question: "The girl smiled. I helped her earlier.",
      answer: [
        "The girl whom I helped earlier smiled.",
        "The girl who I helped earlier smiled.",
        "The girl that I helped earlier smiled.",
      ],
    },
    {
      id: 36,
      question: "I lost the shirt. My sister bought it for me.",
      answer: [
        "I lost the shirt that my sister bought for me.",
        "I lost the shirt which my sister bought for me.",
      ],
    },
    {
      id: 37,
      question: "She met a singer. He is very famous.",
      answer: [
        "She met a singer who is very famous.",
        "She met a singer that is very famous.",
      ],
    },
    {
      id: 38,
      question: "I like the dress. She is wearing it.",
      answer: [
        "I like the dress that she is wearing.",
        "I like the dress which she is wearing.",
      ],
    },
    {
      id: 39,
      question: "He called the shop. It repaired his phone.",
      answer: [
        "He called the shop that repaired his phone.",
        "He called the shop which repaired his phone.",
      ],
    },
    {
      id: 40,
      question: "The child is crying. His toy fell down.",
      answer: ["The child whose toy fell down is crying."],
    },

    {
      id: 41,
      question: "This is the nurse. She treated me.",
      answer: [
        "This is the nurse who treated me.",
        "This is the nurse that treated me.",
      ],
    },
    {
      id: 42,
      question: "We visited the hotel. You stayed there last year.",
      answer: ["We visited the hotel where you stayed last year."],
    },
    {
      id: 43,
      question: "He fixed the bike. It belonged to his brother.",
      answer: [
        "He fixed the bike that belonged to his brother.",
        "He fixed the bike which belonged to his brother.",
      ],
    },
    {
      id: 44,
      question: "She bought a phone. It has a great camera.",
      answer: [
        "She bought a phone that has a great camera.",
        "She bought a phone which has a great camera.",
      ],
    },
    {
      id: 45,
      question: "He met a woman. Her son is in my class.",
      answer: ["He met a woman whose son is in my class."],
    },
    {
      id: 46,
      question: "The man smiled. I sat next to him.",
      answer: [
        "The man whom I sat next to smiled.",
        "The man who I sat next to smiled.",
        "The man that I sat next to smiled.",
      ],
    },
    {
      id: 47,
      question: "I remember the moment. We first met then.",
      answer: [
        "I remember the moment when we first met.",
        "I remember the moment that we first met.",
      ],
    },
    {
      id: 48,
      question: "The dog barked. It belongs to my neighbor.",
      answer: [
        "The dog that belongs to my neighbor barked.",
        "The dog which belongs to my neighbor barked.",
      ],
    },
    {
      id: 49,
      question: "She visited a country. It is very beautiful.",
      answer: [
        "She visited a country that is very beautiful.",
        "She visited a country which is very beautiful.",
      ],
    },
    {
      id: 50,
      question: "The boy is helpful. You were talking to him.",
      answer: [
        "The boy whom you were talking to is helpful.",
        "The boy who you were talking to is helpful.",
        "The boy that you were talking to is helpful.",
      ],
    },

    {
      id: 51,
      question: "I fixed the chair. Its leg was broken.",
      answer: ["I fixed the chair whose leg was broken."],
    },
    {
      id: 52,
      question: "The woman is my cousin. She lives in Yangon.",
      answer: [
        "The woman, who lives in Yangon, is my cousin.",
        "The woman who lives in Yangon is my cousin.",
      ],
    },
    {
      id: 53,
      question: "He cleaned the room. I slept there.",
      answer: ["He cleaned the room where I slept."],
    },
    {
      id: 54,
      question: "I love the song. You played it.",
      answer: [
        "I love the song that you played.",
        "I love the song which you played.",
      ],
    },
    {
      id: 55,
      question: "The city was crowded. We went there.",
      answer: ["The city where we went was crowded."],
    },
    {
      id: 56,
      question: "The teacher praised the student. She answered correctly.",
      answer: [
        "The teacher praised the student who answered correctly.",
        "The teacher praised the student that answered correctly.",
      ],
    },
    {
      id: 57,
      question: "I visited the shop. It sells handmade things.",
      answer: [
        "I visited the shop that sells handmade things.",
        "I visited the shop which sells handmade things.",
      ],
    },
    {
      id: 58,
      question: "She called her friend. He moved abroad.",
      answer: [
        "She called her friend who moved abroad.",
        "She called her friend that moved abroad.",
      ],
    },
    {
      id: 59,
      question: "The restaurant is cheap. I usually eat there.",
      answer: ["The restaurant where I usually eat is cheap."],
    },
    {
      id: 60,
      question: "He adopted a dog. Its tail was injured.",
      answer: ["He adopted a dog whose tail was injured."],
    },

    {
      id: 61,
      question: "The car is fast. My dad owns it.",
      answer: [
        "The car that my dad owns is fast.",
        "The car which my dad owns is fast.",
      ],
    },
    {
      id: 62,
      question: "I met a girl. Her brother is my classmate.",
      answer: ["I met a girl whose brother is my classmate."],
    },
    {
      id: 63,
      question: "She visited the museum. It opened last year.",
      answer: [
        "She visited the museum that opened last year.",
        "She visited the museum which opened last year.",
      ],
    },
    {
      id: 64,
      question: "The man is retired. He used to teach physics.",
      answer: [
        "The man, who used to teach physics, is retired.",
        "The man who used to teach physics is retired.",
      ],
    },
    {
      id: 65,
      question: "I lost the book. You lent it to me.",
      answer: [
        "I lost the book that you lent me.",
        "I lost the book which you lent me.",
      ],
    },
    {
      id: 66,
      question: "She saw a house. It looked abandoned.",
      answer: [
        "She saw a house that looked abandoned.",
        "She saw a house which looked abandoned.",
      ],
    },
    {
      id: 67,
      question: "This is the lady. I told you about her.",
      answer: [
        "This is the lady whom I told you about.",
        "This is the lady who I told you about.",
        "This is the lady that I told you about.",
      ],
    },
    {
      id: 68,
      question: "The bus was late. I usually take it.",
      answer: [
        "The bus that I usually take was late.",
        "The bus which I usually take was late.",
      ],
    },
    {
      id: 69,
      question: "I know a shop. It sells fresh fruit.",
      answer: [
        "I know a shop that sells fresh fruit.",
        "I know a shop which sells fresh fruit.",
      ],
    },
    {
      id: 70,
      question: "The beach was quiet. We relaxed there.",
      answer: ["The beach where we relaxed was quiet."],
    },

    {
      id: 71,
      question: "He saw a cat. The cat had green eyes.",
      answer: [
        "He saw a cat that had green eyes.",
        "He saw a cat which had green eyes.",
      ],
    },
    {
      id: 72,
      question: "I bought a laptop. My sister recommended it.",
      answer: [
        "I bought the laptop that my sister recommended.",
        "I bought the laptop which my sister recommended.",
      ],
    },
    {
      id: 73,
      question: "The woman is famous. I interviewed her.",
      answer: [
        "The woman whom I interviewed is famous.",
        "The woman who I interviewed is famous.",
        "The woman that I interviewed is famous.",
      ],
    },
    {
      id: 74,
      question: "The dog barked. It lives next door.",
      answer: [
        "The dog that lives next door barked.",
        "The dog which lives next door barked.",
      ],
    },
    {
      id: 75,
      question: "He visited the house. His grandfather built it.",
      answer: [
        "He visited the house that his grandfather built.",
        "He visited the house which his grandfather built.",
      ],
    },
    {
      id: 76,
      question: "I like the teacher. She teaches English.",
      answer: [
        "I like the teacher who teaches English.",
        "I like the teacher that teaches English.",
      ],
    },
    {
      id: 77,
      question: "The person is my friend. You met him at the party.",
      answer: [
        "The person whom you met at the party is my friend.",
        "The person who you met at the party is my friend.",
        "The person that you met at the party is my friend.",
      ],
    },
    {
      id: 78,
      question: "The movie was boring. We watched it last night.",
      answer: [
        "The movie that we watched last night was boring.",
        "The movie which we watched last night was boring.",
      ],
    },
    {
      id: 79,
      question: "The boy apologized. His mistake caused trouble.",
      answer: ["The boy whose mistake caused trouble apologized."],
    },
    {
      id: 80,
      question: "He bought a bag. It was made in Japan.",
      answer: [
        "He bought a bag that was made in Japan.",
        "He bought a bag which was made in Japan.",
      ],
    },

    {
      id: 81,
      question: "This is the store. I found my shoes there.",
      answer: ["This is the store where I found my shoes."],
    },
    {
      id: 82,
      question: "She invited a friend. He lives nearby.",
      answer: [
        "She invited a friend who lives nearby.",
        "She invited a friend that lives nearby.",
      ],
    },
    {
      id: 83,
      question: "The man looked upset. I bumped into him.",
      answer: [
        "The man whom I bumped into looked upset.",
        "The man who I bumped into looked upset.",
        "The man that I bumped into looked upset.",
      ],
    },
    {
      id: 84,
      question: "The teacher helped a girl. Her homework was incomplete.",
      answer: ["The teacher helped a girl whose homework was incomplete."],
    },
    {
      id: 85,
      question: "He cleaned the place. They celebrated there.",
      answer: ["He cleaned the place where they celebrated."],
    },
    {
      id: 86,
      question: "He read a book. The book was very famous.",
      answer: [
        "He read a book that was very famous.",
        "He read a book which was very famous.",
      ],
    },
    {
      id: 87,
      question: "I visited a village. My uncle lives there.",
      answer: ["I visited the village where my uncle lives."],
    },
    {
      id: 88,
      question: "The machine broke down. You were using it.",
      answer: [
        "The machine that you were using broke down.",
        "The machine which you were using broke down.",
      ],
    },
    {
      id: 89,
      question: "She is talking to a boy. He is her classmate.",
      answer: [
        "She is talking to a boy who is her classmate.",
        "She is talking to a boy that is her classmate.",
      ],
    },
    {
      id: 90,
      question: "He visited a museum. My friend works there.",
      answer: ["He visited the museum where my friend works."],
    },

    {
      id: 91,
      question: "I called a woman. She gave me information.",
      answer: [
        "I called a woman who gave me information.",
        "I called a woman that gave me information.",
      ],
    },
    {
      id: 92,
      question: "He met a person. The person knew his father.",
      answer: [
        "He met a person who knew his father.",
        "He met a person that knew his father.",
      ],
    },
    {
      id: 93,
      question: "I repaired the bike. You damaged it.",
      answer: [
        "I repaired the bike that you damaged.",
        "I repaired the bike which you damaged.",
      ],
    },
    {
      id: 94,
      question: "She took a photo. Her sister was in it.",
      answer: [
        "She took a photo in which her sister was.",
        "She took a photo that her sister was in.",
        "She took a photo which her sister was in.",
      ],
    },
    {
      id: 95,
      question: "The street is quiet. I live there.",
      answer: ["The street where I live is quiet."],
    },
    {
      id: 96,
      question: "She likes a singer. He has many fans.",
      answer: [
        "She likes a singer who has many fans.",
        "She likes a singer that has many fans.",
      ],
    },
    {
      id: 97,
      question: "I visited the market. My uncle works there.",
      answer: ["I visited the market where my uncle works."],
    },
    {
      id: 98,
      question: "They admire a leader. His ideas changed history.",
      answer: ["They admire a leader whose ideas changed history."],
    },
    {
      id: 99,
      question: "I cleaned the room. My friends slept there.",
      answer: ["I cleaned the room where my friends slept."],
    },
    {
      id: 100,
      question: "She bought a vase. It was handmade.",
      answer: [
        "She bought a vase that was handmade.",
        "She bought a vase which was handmade.",
      ],
    },
  ],
  "Affixes in English": [
    {
      id: 1,
      question: "His (possible) explanation was not accepted by the committee.",
      answer: ["impossible"],
    },
    {
      id: 2,
      question: "Her (respect) behavior surprised everyone during the meeting.",
      answer: ["disrespectful"],
    },
    {
      id: 3,
      question: "The teacher found his excuse completely (believe).",
      answer: ["unbelievable"],
    },
    {
      id: 4,
      question: "The project failed due to (organize) planning.",
      answer: ["disorganized"],
    },
    {
      id: 5,
      question: "Continuous practice can make you (stop) in your skill.",
      answer: ["unstoppable"],
    },
    {
      id: 6,
      question: "Eating too much sugar is (health) for children.",
      answer: ["unhealthy"],
    },
    {
      id: 7,
      question: "The team's (success) performance impressed the manager.",
      answer: ["successful"],
    },
    {
      id: 8,
      question: "She felt (comfort) in the new environment.",
      answer: ["uncomfortable"],
    },
    {
      id: 9,
      question: "His message was clear and (understand).",
      answer: ["understandable"],
    },
    {
      id: 10,
      question: "The workers complained about the (fair) treatment.",
      answer: ["unfair"],
    },
    {
      id: 11,
      question: "He is an (experience) driver, so the trip was safe.",
      answer: ["inexperienced"],
    },
    {
      id: 12,
      question: "The manager gave an (polite) reply to the customer.",
      answer: ["impolite"],
    },
    {
      id: 13,
      question: "That movie was very (forget); I won’t remember it tomorrow.",
      answer: ["forgettable"],
    },
    {
      id: 14,
      question: "The students appreciated her (help) attitude.",
      answer: ["helpful"],
    },
    {
      id: 15,
      question: "She gets (patient) when people walk slowly.",
      answer: ["impatient"],
    },
    {
      id: 16,
      question:
        "The scientist made an (accurate) prediction about the weather.",
      answer: ["inaccurate"],
    },
    {
      id: 17,
      question: "We must avoid (necessary) arguments.",
      answer: ["unnecessary"],
    },
    {
      id: 18,
      question: "The company hired more staff to improve (produce).",
      answer: ["productivity"],
    },
    {
      id: 19,
      question: "His joke was completely (appropriate) for the situation.",
      answer: ["inappropriate"],
    },
    {
      id: 20,
      question: "The disease is (treat) if discovered early.",
      answer: ["treatable"],
    },
    {
      id: 21,
      question: "She made a very (logic) decision.",
      answer: ["illogical"],
    },
    {
      id: 22,
      question: "The factory reduced pollution using (modern) machines.",
      answer: ["modernized"],
    },
    {
      id: 23,
      question: "They had an (agree) discussion about the plan.",
      answer: ["agreeable"],
    },
    {
      id: 24,
      question: "He apologized for his (responsible) actions.",
      answer: ["irresponsible"],
    },
    {
      id: 25,
      question: "The view from the mountain was absolutely (beauty).",
      answer: ["beautiful"],
    },
    {
      id: 26,
      question: "The teacher warned the class about (proper) behavior.",
      answer: ["improper"],
    },
    {
      id: 27,
      question: "Hard work can lead to (success).",
      answer: ["successful", "successfulness"],
    },
    {
      id: 28,
      question: "The politician gave a very (power) speech.",
      answer: ["powerful"],
    },
    {
      id: 29,
      question: "There was a sudden (appear) of clouds.",
      answer: ["disappearance", "reappearance"],
    },
    {
      id: 30,
      question: "The road became (danger) after the heavy rain.",
      answer: ["dangerous"],
    },
    {
      id: 31,
      question: "He is known for his (honest) nature.",
      answer: ["dishonest"],
    },
    {
      id: 32,
      question: "They were punished for their (obey) of the rules.",
      answer: ["disobedience"],
    },
    {
      id: 33,
      question: "We need a more (effect) solution to the problem.",
      answer: ["effective"],
    },
    {
      id: 34,
      question: "His handwriting is almost (read).",
      answer: ["unreadable"],
    },
    {
      id: 35,
      question: "The victim made a full (recover) after the surgery.",
      answer: ["recovery"],
    },
    {
      id: 36,
      question: "She was praised for her (brave) during the rescue.",
      answer: ["bravery"],
    },
    {
      id: 37,
      question: "Some insects are (harm), so they should not be killed.",
      answer: ["harmless"],
    },
    {
      id: 38,
      question: "The boss appreciated the staff’s (punctual).",
      answer: ["punctuality"],
    },
    {
      id: 39,
      question: "His rude behavior was totally (accept).",
      answer: ["unacceptable"],
    },
    {
      id: 40,
      question: "The team’s (cooperate) led to a successful outcome.",
      answer: ["cooperation"],
    },
    {
      id: 41,
      question:
        "The company apologized for the (accurate) information in the report.",
      answer: ["inaccurate"],
    },
    {
      id: 42,
      question: "Her story was completely (believe) to everyone.",
      answer: ["unbelievable"],
    },
    {
      id: 43,
      question: "The workers complained about the (fair) treatment.",
      answer: ["unfair"],
    },
    {
      id: 44,
      question: "The scientist found an (usual) pattern in the experiment.",
      answer: ["unusual"],
    },
    {
      id: 45,
      question:
        "He made an (responsible) decision that affected the whole group.",
      answer: ["irresponsible"],
    },
    {
      id: 46,
      question: "The weather became (predict) after the storm.",
      answer: ["unpredictable"],
    },
    {
      id: 47,
      question: "(Limit) access to the area is for safety reasons.",
      answer: ["unlimited", "limited"],
    },
    {
      id: 48,
      question: "There was a strong (react) to the new rule.",
      answer: ["reaction"],
    },
    {
      id: 49,
      question: "The virus became (active) during the cold season.",
      answer: ["inactive"],
    },
    {
      id: 50,
      question: "She felt (secure) walking alone at night.",
      answer: ["insecure"],
    },
    {
      id: 51,
      question: "He was fired for his (loyal) actions.",
      answer: ["disloyal"],
    },
    {
      id: 52,
      question: "We faced some (expected) problems during the trip.",
      answer: ["unexpected"],
    },
    {
      id: 53,
      question: "The policy change caused a lot of (agree) among the staff.",
      answer: ["disagreement"],
    },
    {
      id: 54,
      question: "He showed great (respect) toward his elders.",
      answer: ["respectfulness", "respect"],
    },
    {
      id: 55,
      question: "The medicine had some (pleasant) side effects.",
      answer: ["unpleasant"],
    },
    {
      id: 56,
      question: "Her explanation was (clear) and easy to understand.",
      answer: ["unclear"],
    },
    {
      id: 57,
      question: "The machine became (operate) after the power cut.",
      answer: ["inoperative"],
    },
    {
      id: 58,
      question: "He apologized for his (appropriate) comments.",
      answer: ["inappropriate"],
    },
    {
      id: 59,
      question: "The criminal was charged with (legal) activity.",
      answer: ["illegal"],
    },
    {
      id: 60,
      question: "The company offered a (replace) for the damaged product.",
      answer: ["replacement"],
    },
    {
      id: 61,
      question: "The story was so (interest) that I read it again.",
      answer: ["interesting"],
    },
    {
      id: 62,
      question: "He became (patient) while waiting for the results.",
      answer: ["impatient"],
    },
    {
      id: 63,
      question: "His (kind) made everyone admire him.",
      answer: ["kindness"],
    },
    {
      id: 64,
      question: "The old building remained (damage) after the earthquake.",
      answer: ["undamaged"],
    },
    {
      id: 65,
      question: "They showed great (depend) on each other.",
      answer: ["dependence"],
    },
    {
      id: 66,
      question: "His act of bravery was truly (forget).",
      answer: ["unforgettable"],
    },
    {
      id: 67,
      question: "The new rule was (force) by the government.",
      answer: ["enforced"],
    },
    {
      id: 68,
      question: "The manager was surprised by the (profession) behavior.",
      answer: ["unprofessional"],
    },
    {
      id: 69,
      question: "The little girl was (fear) of the dark.",
      answer: ["fearful", "fearless"],
    },
    {
      id: 70,
      question: "The parents wanted to ensure their child’s (safe).",
      answer: ["safety"],
    },
    {
      id: 71,
      question: "The meeting was (productive) because of poor planning.",
      answer: ["unproductive"],
    },
    {
      id: 72,
      question: "He made a quick (judge) about the situation.",
      answer: ["judgment", "judgement"],
    },
    {
      id: 73,
      question: "The children were extremely (energy) after the trip.",
      answer: ["energetic"],
    },
    {
      id: 74,
      question: "The scientist made an important (discover).",
      answer: ["discovery"],
    },
    {
      id: 75,
      question: "The students were warned about (behave) in class.",
      answer: ["misbehavior"],
    },
    {
      id: 76,
      question: "They had a very (hope) attitude toward the future.",
      answer: ["hopeful"],
    },
    {
      id: 77,
      question: "His presentation was (inspire) for many people.",
      answer: ["inspirational"],
    },
    {
      id: 78,
      question: "The hotel offered many (comfort) facilities.",
      answer: ["comfortable"],
    },
    {
      id: 79,
      question: "The doctor recommended a (prevent) measure.",
      answer: ["preventive", "preventative"],
    },
    {
      id: 80,
      question: "They were accused of (loyal) to the company.",
      answer: ["disloyalty"],
    },
    {
      id: 81,
      question: "The test results were (decide) for the diagnosis.",
      answer: ["decisive"],
    },
    {
      id: 82,
      question: "The teacher noticed his (focus) in class.",
      answer: ["unfocused"],
    },
    {
      id: 83,
      question: "She joined a group of (active) volunteers.",
      answer: ["active"],
    },
    {
      id: 84,
      question: "The old man lived in complete (silent).",
      answer: ["silence"],
    },
    {
      id: 85,
      question: "The athlete showed great (strong) during the race.",
      answer: ["strength"],
    },
    {
      id: 86,
      question: "The road was (access) during the flood.",
      answer: ["inaccessible"],
    },
    {
      id: 87,
      question: "Everyone praised the (possible) outcome of the plan.",
      answer: ["positive"],
    },
    {
      id: 88,
      question: "The singer displayed (talent) during the show.",
      answer: ["talent", "talented"],
    },
    {
      id: 89,
      question: "The new system caused some (confuse) at first.",
      answer: ["confusion"],
    },
    {
      id: 90,
      question: "His (agree) attitude made teamwork easy.",
      answer: ["agreeable"],
    },
    {
      id: 91,
      question: "The team faced several (manage) issues.",
      answer: ["management"],
    },
    {
      id: 92,
      question: "The company promised (safe) working conditions.",
      answer: ["safe", "safety"],
    },
    {
      id: 93,
      question: "The country experienced (stable) during the crisis.",
      answer: ["instability"],
    },
    {
      id: 94,
      question: "The students admired the teacher’s (patient).",
      answer: ["patience"],
    },
    {
      id: 95,
      question: "They complained about the (help) staff at the store.",
      answer: ["unhelpful"],
    },
    {
      id: 96,
      question: "Her reaction was quite (predict).",
      answer: ["predictable"],
    },
    {
      id: 97,
      question: "The athlete suffered a serious (injure).",
      answer: ["injury"],
    },
    {
      id: 98,
      question: "There was a sudden (appear) of smoke.",
      answer: ["appearance"],
    },
    {
      id: 99,
      question: "He left a very (impress) impact on his students.",
      answer: ["impressive"],
    },
    {
      id: 100,
      question: "The manager discussed the team’s (perform) in detail.",
      answer: ["performance"],
    },
  ],
  "Participle Phrases": [
    {
      id: 1,
      question: "After she finished her homework, she went to sleep.",
      answer: ["Having finished her homework, she went to sleep."],
    },
    {
      id: 2,
      question: "While he was walking to school, he found a wallet.",
      answer: ["Walking to school, he found a wallet."],
    },
    {
      id: 3,
      question: "Because she was shocked, she couldn’t move.",
      answer: ["Being shocked, she couldn’t move."],
    },
    {
      id: 4,
      question: "When he heard the noise, he ran outside.",
      answer: ["Hearing the noise, he ran outside."],
    },
    {
      id: 5,
      question: "After they had completed the task, they celebrated.",
      answer: ["Having completed the task, they celebrated."],
    },

    {
      id: 6,
      question: "While she was watching the movie, she fell asleep.",
      answer: ["Watching the movie, she fell asleep."],
    },
    {
      id: 7,
      question: "Because he was excited, he jumped up and down.",
      answer: ["Being excited, he jumped up and down."],
    },
    {
      id: 8,
      question: "After she had cooked dinner, she set the table.",
      answer: ["Having cooked dinner, she set the table."],
    },
    {
      id: 9,
      question: "When he opened the window, fresh air came in.",
      answer: ["Opening the window, fresh air came in."],
    },
    {
      id: 10,
      question: "Since she lives alone, she does everything by herself.",
      answer: ["Living alone, she does everything by herself."],
    },

    {
      id: 11,
      question: "After he saved enough money, he bought a bike.",
      answer: ["Having saved enough money, he bought a bike."],
    },
    {
      id: 12,
      question: "While she was reading, she didn’t hear the bell.",
      answer: ["Reading, she didn’t hear the bell."],
    },
    {
      id: 13,
      question: "Because he was injured, he couldn’t play.",
      answer: ["Being injured, he couldn’t play."],
    },
    {
      id: 14,
      question: "When she saw the spider, she screamed.",
      answer: ["Seeing the spider, she screamed."],
    },
    {
      id: 15,
      question: "After he had washed the car, he went inside.",
      answer: ["Having washed the car, he went inside."],
    },

    {
      id: 16,
      question: "While they were singing, it started raining.",
      answer: ["Singing, it started raining."],
    },
    {
      id: 17,
      question: "Because she was confused, she asked for help.",
      answer: ["Being confused, she asked for help."],
    },
    {
      id: 18,
      question: "After he had finished the exam, he relaxed.",
      answer: ["Having finished the exam, he relaxed."],
    },
    {
      id: 19,
      question: "When he noticed the mistake, he corrected it.",
      answer: ["Noticing the mistake, he corrected it."],
    },
    {
      id: 20,
      question: "Since she didn’t have her keys, she waited outside.",
      answer: ["Not having her keys, she waited outside."],
    },

    {
      id: 21,
      question: "After she had packed her bags, she left the house.",
      answer: ["Having packed her bags, she left the house."],
    },
    {
      id: 22,
      question: "While he was eating lunch, he received a call.",
      answer: ["Eating lunch, he received a call."],
    },
    {
      id: 23,
      question: "Because she was embarrassed, she looked down.",
      answer: ["Being embarrassed, she looked down."],
    },
    {
      id: 24,
      question: "When he noticed the stranger, he stepped back.",
      answer: ["Noticing the stranger, he stepped back."],
    },
    {
      id: 25,
      question: "After he had cleaned the room, he started studying.",
      answer: ["Having cleaned the room, he started studying."],
    },

    {
      id: 26,
      question: "While she was walking home, it began to rain.",
      answer: ["Walking home, it began to rain."],
    },
    {
      id: 27,
      question: "Because he was frightened, he ran away.",
      answer: ["Being frightened, he ran away."],
    },
    {
      id: 28,
      question: "After they had closed the shop, they went home.",
      answer: ["Having closed the shop, they went home."],
    },
    {
      id: 29,
      question: "When she opened the box, she smiled.",
      answer: ["Opening the box, she smiled."],
    },
    {
      id: 30,
      question: "Since he didn’t know the rules, he asked.",
      answer: ["Not knowing the rules, he asked."],
    },

    {
      id: 31,
      question: "After he had written the email, he sent it.",
      answer: ["Having written the email, he sent it."],
    },
    {
      id: 32,
      question: "While she was brushing her teeth, she dropped the brush.",
      answer: ["Brushing her teeth, she dropped the brush."],
    },
    {
      id: 33,
      question: "Because he felt sick, he stayed home.",
      answer: ["Feeling sick, he stayed home."],
    },
    {
      id: 34,
      question: "When she noticed the rain, she opened her umbrella.",
      answer: ["Noticing the rain, she opened her umbrella."],
    },
    {
      id: 35,
      question: "After he finished cooking, he called everyone to eat.",
      answer: ["Having finished cooking, he called everyone to eat."],
    },

    {
      id: 36,
      question: "While he was cleaning the table, he broke a glass.",
      answer: ["Cleaning the table, he broke a glass."],
    },
    {
      id: 37,
      question: "Because she felt cold, she wore a jacket.",
      answer: ["Feeling cold, she wore a jacket."],
    },
    {
      id: 38,
      question: "After she had checked her work, she submitted it.",
      answer: ["Having checked her work, she submitted it."],
    },
    {
      id: 39,
      question: "When he saw the accident, he called for help.",
      answer: ["Seeing the accident, he called for help."],
    },
    {
      id: 40,
      question: "Since he had no money, he didn’t buy anything.",
      answer: ["Having no money, he didn’t buy anything."],
    },

    {
      id: 41,
      question: "After she had learned the song, she performed it.",
      answer: ["Having learned the song, she performed it."],
    },
    {
      id: 42,
      question: "While he was washing dishes, he cut his hand.",
      answer: ["Washing dishes, he cut his hand."],
    },
    {
      id: 43,
      question: "Because she was surprised, she covered her mouth.",
      answer: ["Being surprised, she covered her mouth."],
    },
    {
      id: 44,
      question: "When he heard the announcement, he sat down.",
      answer: ["Hearing the announcement, he sat down."],
    },
    {
      id: 45,
      question: "After they had watered the plants, they played outside.",
      answer: ["Having watered the plants, they played outside."],
    },

    {
      id: 46,
      question: "While she was waiting for the bus, she read a book.",
      answer: ["Waiting for the bus, she read a book."],
    },
    {
      id: 47,
      question: "Because he was angry, he slammed the door.",
      answer: ["Being angry, he slammed the door."],
    },
    {
      id: 48,
      question: "After she had tied her shoes, she started running.",
      answer: ["Having tied her shoes, she started running."],
    },
    {
      id: 49,
      question: "When he opened the letter, he gasped.",
      answer: ["Opening the letter, he gasped."],
    },
    {
      id: 50,
      question: "Since she didn’t understand the question, she asked again.",
      answer: ["Not understanding the question, she asked again."],
    },

    {
      id: 51,
      question: "After she had washed her hair, she dried it.",
      answer: ["Having washed her hair, she dried it."],
    },
    {
      id: 52,
      question: "While he was drawing, he spilled ink.",
      answer: ["Drawing, he spilled ink."],
    },
    {
      id: 53,
      question: "Because she was irritated, she walked away.",
      answer: ["Being irritated, she walked away."],
    },
    {
      id: 54,
      question: "When he saw the teacher, he stopped talking.",
      answer: ["Seeing the teacher, he stopped talking."],
    },
    {
      id: 55,
      question: "After he had read the book, he returned it.",
      answer: ["Having read the book, he returned it."],
    },

    {
      id: 56,
      question: "While she was cleaning the floor, she slipped.",
      answer: ["Cleaning the floor, she slipped."],
    },
    {
      id: 57,
      question: "Because he felt lonely, he called his friend.",
      answer: ["Feeling lonely, he called his friend."],
    },
    {
      id: 58,
      question: "After they had eaten breakfast, they left the house.",
      answer: ["Having eaten breakfast, they left the house."],
    },
    {
      id: 59,
      question: "When she noticed the time, she hurried.",
      answer: ["Noticing the time, she hurried."],
    },
    {
      id: 60,
      question: "Since he didn’t have a ticket, he couldn’t enter.",
      answer: ["Not having a ticket, he couldn’t enter."],
    },

    {
      id: 61,
      question: "After he had locked the door, he walked away.",
      answer: ["Having locked the door, he walked away."],
    },
    {
      id: 62,
      question: "While she was painting, she stained her shirt.",
      answer: ["Painting, she stained her shirt."],
    },
    {
      id: 63,
      question: "Because he was pleased, he smiled.",
      answer: ["Being pleased, he smiled."],
    },
    {
      id: 64,
      question: "When she saw the rainbow, she took a picture.",
      answer: ["Seeing the rainbow, she took a picture."],
    },
    {
      id: 65,
      question: "After he had repaired the computer, it worked again.",
      answer: ["Having repaired the computer, it worked again."],
    },

    {
      id: 66,
      question: "While he was jogging, he twisted his ankle.",
      answer: ["Jogging, he twisted his ankle."],
    },
    {
      id: 67,
      question: "Because she was interested, she asked more questions.",
      answer: ["Being interested, she asked more questions."],
    },
    {
      id: 68,
      question: "After she had studied the lesson, she understood it.",
      answer: ["Having studied the lesson, she understood it."],
    },
    {
      id: 69,
      question: "When he saw the gift, he opened it quickly.",
      answer: ["Seeing the gift, he opened it quickly."],
    },
    {
      id: 70,
      question: "Since she forgot her phone, she went back home.",
      answer: ["Having forgotten her phone, she went back home."],
    },

    {
      id: 71,
      question: "After he had fed the dog, he washed his hands.",
      answer: ["Having fed the dog, he washed his hands."],
    },
    {
      id: 72,
      question: "While she was dancing, she twisted her knee.",
      answer: ["Dancing, she twisted her knee."],
    },
    {
      id: 73,
      question: "Because he felt bored, he went outside.",
      answer: ["Feeling bored, he went outside."],
    },
    {
      id: 74,
      question: "When she heard the footsteps, she hid.",
      answer: ["Hearing the footsteps, she hid."],
    },
    {
      id: 75,
      question: "After he had checked the door, he went upstairs.",
      answer: ["Having checked the door, he went upstairs."],
    },

    {
      id: 76,
      question: "While she was sweeping the porch, she found a ring.",
      answer: ["Sweeping the porch, she found a ring."],
    },
    {
      id: 77,
      question: "Because he was confused, he re-read the instructions.",
      answer: ["Being confused, he re-read the instructions."],
    },
    {
      id: 78,
      question: "After she had counted the money, she put it away.",
      answer: ["Having counted the money, she put it away."],
    },
    {
      id: 79,
      question: "When he noticed the smoke, he called the fire department.",
      answer: ["Noticing the smoke, he called the fire department."],
    },
    {
      id: 80,
      question: "Since she didn’t recognize him, she ignored him.",
      answer: ["Not recognizing him, she ignored him."],
    },

    {
      id: 81,
      question: "After he had folded the clothes, he put them in the drawer.",
      answer: ["Having folded the clothes, he put them in the drawer."],
    },
    {
      id: 82,
      question: "While she was cooking, she burned her hand.",
      answer: ["Cooking, she burned her hand."],
    },
    {
      id: 83,
      question: "Because he was proud, he raised his head.",
      answer: ["Being proud, he raised his head."],
    },
    {
      id: 84,
      question: "When she saw the message, she replied quickly.",
      answer: ["Seeing the message, she replied quickly."],
    },
    {
      id: 85,
      question: "After he had cleaned the kitchen, he relaxed.",
      answer: ["Having cleaned the kitchen, he relaxed."],
    },

    {
      id: 86,
      question:
        "While she was packing her suitcase, she remembered her passport.",
      answer: ["Packing her suitcase, she remembered her passport."],
    },
    {
      id: 87,
      question: "Because he was worried, he couldn’t sleep.",
      answer: ["Being worried, he couldn’t sleep."],
    },
    {
      id: 88,
      question: "After she had driven for hours, she stopped to rest.",
      answer: ["Having driven for hours, she stopped to rest."],
    },
    {
      id: 89,
      question: "When he saw the test results, he sighed.",
      answer: ["Seeing the test results, he sighed."],
    },
    {
      id: 90,
      question: "Since she lost her wallet, she asked for help.",
      answer: ["Having lost her wallet, she asked for help."],
    },

    {
      id: 91,
      question: "After she had locked the windows, she went to bed.",
      answer: ["Having locked the windows, she went to bed."],
    },
    {
      id: 92,
      question: "While he was driving, he missed the turn.",
      answer: ["Driving, he missed the turn."],
    },
    {
      id: 93,
      question: "Because she was hopeful, she waited patiently.",
      answer: ["Being hopeful, she waited patiently."],
    },
    {
      id: 94,
      question: "When he opened the fridge, he smelled something bad.",
      answer: ["Opening the fridge, he smelled something bad."],
    },
    {
      id: 95,
      question: "After they had built the tent, they rested.",
      answer: ["Having built the tent, they rested."],
    },

    {
      id: 96,
      question: "While she was ironing, she burned her sleeve.",
      answer: ["Ironing, she burned her sleeve."],
    },
    {
      id: 97,
      question: "Because he felt nervous, he shook.",
      answer: ["Feeling nervous, he shook."],
    },
    {
      id: 98,
      question: "After she had repaired the bike, she rode it.",
      answer: ["Having repaired the bike, she rode it."],
    },
    {
      id: 99,
      question: "When he noticed the cat, he petted it.",
      answer: ["Noticing the cat, he petted it."],
    },
    {
      id: 100,
      question: "Since she forgot the address, she called her friend.",
      answer: ["Having forgotten the address, she called her friend."],
    },
  ],
  "It is/ It was": [
    {
      id: 1,
      question: "(My daughter) won the first prize.",
      answer: [
        "It was my daughter who won the first prize.",
        "It was my daughter that won the first prize.",
      ],
    },
    {
      id: 2,
      question: "I met (the new teacher) yesterday.",
      answer: [
        "It was the new teacher who I met yesterday.",
        "It was the new teacher that I met yesterday.",
      ],
    },
    {
      id: 3,
      question: "He solved (the difficult problem).",
      answer: ["It was the difficult problem that he solved."],
    },
    {
      id: 4,
      question: "She bought (a beautiful dress) for the party.",
      answer: [
        "It was a beautiful dress that she bought for the party.",
        "It was a beautiful dress which she bought for the party.",
      ],
    },
    {
      id: 5,
      question: "(The student) answered the question correctly.",
      answer: [
        "It was the student who answered the question correctly.",
        "It was the student that answered the question correctly.",
      ],
    },
    {
      id: 6,
      question: "I called (my best friend) last night.",
      answer: [
        "It was my best friend who I called last night.",
        "It was my best friend that I called last night.",
      ],
    },
    {
      id: 7,
      question: "They visited (the museum) during the trip.",
      answer: ["It was the museum that they visited during the trip."],
    },
    {
      id: 8,
      question: "She found (her lost keys) under the sofa.",
      answer: [
        "It was her lost keys that she found under the sofa.",
        "It was her lost keys which she found under the sofa.",
      ],
    },
    {
      id: 9,
      question: "(The famous actor) was at the event.",
      answer: [
        "It was the famous actor who was at the event.",
        "It was the famous actor that was at the event.",
      ],
    },
    {
      id: 10,
      question: "He gave (the prize) to the winner.",
      answer: ["It was the prize that he gave to the winner."],
    },
    {
      id: 11,
      question: "I visited (the old library) yesterday.",
      answer: ["It was the old library that I visited yesterday."],
    },
    {
      id: 12,
      question: "(The diligent student) was praised by the teacher.",
      answer: [
        "It was the diligent student who was praised by the teacher.",
        "It was the diligent student that was praised by the teacher.",
      ],
    },
    {
      id: 13,
      question: "She received (the certificate) for her achievement.",
      answer: ["It was the certificate that she received for her achievement."],
    },
    {
      id: 14,
      question: "I borrowed (the book) from the library.",
      answer: ["It was the book that I borrowed from the library."],
    },
    {
      id: 15,
      question: "They elected (the new president) yesterday.",
      answer: [
        "It was the new president who they elected yesterday.",
        "It was the new president that they elected yesterday.",
      ],
    },
    {
      id: 16,
      question: "(The broken chair) was repaired by him.",
      answer: ["It was the broken chair that was repaired by him."],
    },
    {
      id: 17,
      question: "She met (the mayor) at the event.",
      answer: [
        "It was the mayor who she met at the event.",
        "It was the mayor that she met at the event.",
      ],
    },
    {
      id: 18,
      question: "I found (the missing file) on the desk.",
      answer: [
        "It was the missing file that I found on the desk.",
        "It was the missing file which I found on the desk.",
      ],
    },
    {
      id: 19,
      question: "(The new manager) was appointed by the committee today.",
      answer: [
        "It was the new manager who was appointed by the committee today.",
        "It was the new manager that was appointed by the committee today.",
      ],
    },
    {
      id: 20,
      question: "She admired (the painting) in the gallery.",
      answer: ["It was the painting that she admired in the gallery."],
    },
    {
      id: 21,
      question: "I invited (my colleagues) to the party.",
      answer: [
        "It was my colleagues who I invited to the party.",
        "It was my colleagues that I invited to the party.",
      ],
    },
    {
      id: 22,
      question: "(The movie) was enjoyed by him very much.",
      answer: ["It was the movie that was enjoyed by him very much."],
    },
    {
      id: 23,
      question: "She introduced (her friend) to the teacher.",
      answer: [
        "It was her friend who she introduced to the teacher.",
        "It was her friend that she introduced to the teacher.",
      ],
    },
    {
      id: 24,
      question: "I met (the famous author) at the conference.",
      answer: [
        "It was the famous author who I met at the conference.",
        "It was the famous author that I met at the conference.",
      ],
    },
    {
      id: 25,
      question: "They celebrated (the victory) at school.",
      answer: ["It was the victory that they celebrated at school."],
    },
    {
      id: 26,
      question: "He nominated (the best student) for the award.",
      answer: [
        "It was the best student who he nominated for the award.",
        "It was the best student that he nominated for the award.",
      ],
    },
    {
      id: 27,
      question: "I saw (the new sculpture) in the park.",
      answer: ["It was the new sculpture that I saw in the park."],
    },
    {
      id: 28,
      question: "She admired (the brave soldier) for his courage.",
      answer: [
        "It was the brave soldier who she admired for his courage.",
        "It was the brave soldier that she admired for his courage.",
      ],
    },
    {
      id: 29,
      question: "He bought (the antique vase) from the market.",
      answer: ["It was the antique vase that he bought from the market."],
    },
    {
      id: 30,
      question: "(The kind neighbor) helped me with the groceries.",
      answer: [
        "It was the kind neighbor who helped me with the groceries.",
        "It was the kind neighbor that helped me with the groceries.",
      ],
    },
    {
      id: 31,
      question: "(Yesterday) I met my friend.",
      answer: ["It was yesterday that I met my friend."],
    },
    {
      id: 32,
      question: "We explored (the ancient ruins) during vacation.",
      answer: ["It was during vacation that we explored the ancient ruins."],
    },
    {
      id: 33,
      question: "He borrowed (a rare book) from the library.",
      answer: ["It was a rare book that he borrowed from the library."],
    },
    {
      id: 34,
      question: "I saw (the small bird) in the garden.",
      answer: ["It was the small bird that I saw in the garden."],
    },
    {
      id: 35,
      question: "She congratulated (the winning team) enthusiastically.",
      answer: [
        "It was the winning team who she congratulated enthusiastically.",
        "It was the winning team that she congratulated enthusiastically.",
      ],
    },
    {
      id: 36,
      question: "We enjoyed (the sunny afternoon) at the park.",
      answer: ["It was the sunny afternoon that we enjoyed at the park."],
    },
    {
      id: 37,
      question: "(The old fence) was painted yesterday.",
      answer: ["It was the old fence that was painted yesterday."],
    },
    {
      id: 38,
      question: "I helped (the elderly man) across the street.",
      answer: [
        "It was the elderly man who I helped across the street.",
        "It was the elderly man that I helped across the street.",
      ],
    },
    {
      id: 39,
      question: "She noticed (the unusual bird) on the tree.",
      answer: ["It was the unusual bird that she noticed on the tree."],
    },
    {
      id: 40,
      question: "(Our new neighbors) arrived at the party.",
      answer: [
        "It was our new neighbors who arrived at the party.",
        "It was our new neighbors that arrived at the party.",
      ],
    },
    {
      id: 41,
      question: "He completed (the challenging task) quickly.",
      answer: ["It was the challenging task that he completed quickly."],
    },
    {
      id: 42,
      question: "I visited (the famous museum) last week.",
      answer: ["It was the famous museum that I visited last week."],
    },
    {
      id: 43,
      question: "She invited (her best friend) to the wedding.",
      answer: [
        "It was her best friend who she invited to the wedding.",
        "It was her best friend that she invited to the wedding.",
      ],
    },
    {
      id: 44,
      question: "They discovered (the hidden treasure) in the cave.",
      answer: ["It was the hidden treasure that they discovered in the cave."],
    },
    {
      id: 45,
      question: "(The electrician) was called immediately.",
      answer: [
        "It was the electrician who was called immediately.",
        "It was the electrician that was called immediately.",
      ],
    },
    {
      id: 46,
      question: "I admired (the sunset) on the beach.",
      answer: ["It was the sunset that I admired on the beach."],
    },
    {
      id: 47,
      question: "(The diligent worker) finished the job early.",
      answer: [
        "It was the diligent worker who finished the job early.",
        "It was the diligent worker that finished the job early.",
      ],
    },
    {
      id: 48,
      question: "They had a picnic (on Sunday).",
      answer: ["It was on Sunday that they had a picnic."],
    },
    {
      id: 49,
      question: "(The teacher) explained the lesson clearly.",
      answer: [
        "It was the teacher who explained the lesson clearly.",
        "It was the teacher that explained the lesson clearly.",
      ],
    },
    {
      id: 50,
      question: "I watched (the exciting match) last night.",
      answer: ["It was the exciting match that I watched last night."],
    },
    {
      id: 51,
      question: "(The new student) answers the questions confidently.",
      answer: [
        "It is the new student who answers the questions confidently.",
        "It is the new student that answers the questions confidently.",
      ],
    },
    {
      id: 52,
      question: "I am meeting (my cousin) at the party today.",
      answer: [
        "It is my cousin who I am meeting at the party today.",
        "It is my cousin that I am meeting at the party today.",
      ],
    },
    {
      id: 53,
      question: "(Next Monday) we will have a meeting with the principal.",
      answer: [
        "It is next Monday that we will have a meeting with the principal.",
      ],
    },
    {
      id: 54,
      question: "She is reading (an interesting book) during her free time.",
      answer: [
        "It is an interesting book that she is reading during her free time.",
      ],
    },
    {
      id: 55,
      question: "(The manager) calls the staff every morning.",
      answer: [
        "It is the manager who calls the staff every morning.",
        "It is the manager that calls the staff every morning.",
      ],
    },
    {
      id: 56,
      question: "They are watching (the fireworks) tonight.",
      answer: ["It is the fireworks that they are watching tonight."],
    },
    {
      id: 57,
      question: "(The talented musician) plays the piano beautifully.",
      answer: [
        "It is the talented musician who plays the piano beautifully.",
        "It is the talented musician that plays the piano beautifully.",
      ],
    },
    {
      id: 58,
      question: "I meet (the famous scientist) every year at the conference.",
      answer: [
        "It is the famous scientist who I meet every year at the conference.",
        "It is the famous scientist that I meet every year at the conference.",
      ],
    },
    {
      id: 59,
      question: "(During summer) we usually visit our grandparents.",
      answer: ["It is during summer that we usually visit our grandparents."],
    },
    {
      id: 60,
      question: "She writes (a long letter) to her friend every week.",
      answer: ["It is a long letter that she writes to her friend every week."],
    },
    {
      id: 61,
      question: "(The winner) receives a trophy and a medal every year.",
      answer: [
        "It is the winner who receives a trophy and a medal every year.",
        "It is the winner that receives a trophy and a medal every year.",
      ],
    },
    {
      id: 62,
      question: "He is repairing (the broken car) right now.",
      answer: [
        "It is the broken car that he is repairing right now.",
        "It is the broken car which he is repairing right now.",
      ],
    },
    {
      id: 63,
      question: "(This morning) I am jogging in the park.",
      answer: ["It is this morning that I am jogging in the park."],
    },
    {
      id: 64,
      question:
        "She enjoys (the delicious meal) at the restaurant every Friday.",
      answer: [
        "It is the delicious meal that she enjoys at the restaurant every Friday.",
      ],
    },
    {
      id: 65,
      question: "(The teacher) explains the new topic clearly every day.",
      answer: [
        "It is the teacher who explains the new topic clearly every day.",
        "It is the teacher that explains the new topic clearly every day.",
      ],
    },
    {
      id: 66,
      question: "I am helping (the injured man) on the street.",
      answer: [
        "It is the injured man who I am helping on the street.",
        "It is the injured man that I am helping on the street.",
      ],
    },
    {
      id: 67,
      question: "(At noon) we will have a short break.",
      answer: ["It is at noon that we will have a short break."],
    },
    {
      id: 68,
      question: "(The students) are presenting their projects today.",
      answer: [
        "It is the students who are presenting their projects today.",
        "It is the students that are presenting their projects today.",
      ],
    },
    {
      id: 69,
      question: "She will finish (the assignment) by tomorrow.",
      answer: ["It is the assignment that she will finish by tomorrow."],
    },
    {
      id: 70,
      question: "I am meeting (my colleagues) at the cafe.",
      answer: [
        "It is my colleagues who I am meeting at the cafe.",
        "It is my colleagues that I am meeting at the cafe.",
      ],
    },
    {
      id: 71,
      question: "(The gardener) waters the plants every morning.",
      answer: [
        "It is the gardener who waters the plants every morning.",
        "It is the gardener that waters the plants every morning.",
      ],
    },
    {
      id: 72,
      question: "We are watching (the new series) tonight.",
      answer: ["It is the new series that we are watching tonight."],
    },
    {
      id: 73,
      question: "(The scientist) will announce the discovery next week.",
      answer: [
        "It is the scientist who will announce the discovery next week.",
        "It is the scientist that will announce the discovery next week.",
      ],
    },
    {
      id: 74,
      question: "I see (the rainbow) after the rain.",
      answer: ["It is the rainbow that I see after the rain."],
    },
    {
      id: 75,
      question: "She is meeting (her friends) at the park now.",
      answer: [
        "It is her friends who she is meeting at the park now.",
        "It is her friends that she is meeting at the park now.",
      ],
    },
    {
      id: 76,
      question: "(Tomorrow) we will start the new project.",
      answer: ["It is tomorrow that we will start the new project."],
    },
    {
      id: 77,
      question: "He plays (the guitar) every evening.",
      answer: ["It is the guitar that he plays every evening."],
    },
    {
      id: 78,
      question: "I will call (my parents) tonight.",
      answer: [
        "It is my parents who I will call tonight.",
        "It is my parents that I will call tonight.",
      ],
    },
    {
      id: 79,
      question: "(The little boy) is learning to swim.",
      answer: [
        "It is the little boy who is learning to swim.",
        "It is the little boy that is learning to swim.",
      ],
    },
    {
      id: 80,
      question: "She will bake (a cake) for the party.",
      answer: ["It is a cake that she will bake for the party."],
    },
    {
      id: 81,
      question: "I am visiting (the museum) today.",
      answer: ["It is the museum that I am visiting today."],
    },
    {
      id: 82,
      question: "(The students) will participate in the competition.",
      answer: [
        "It is the students who will participate in the competition.",
        "It is the students that will participate in the competition.",
      ],
    },
    {
      id: 83,
      question: "We enjoy (the sunny weather) in spring.",
      answer: ["It is the sunny weather that we enjoy in spring."],
    },
    {
      id: 84,
      question: "He will finish (the work) by evening.",
      answer: ["It is the work that he will finish by evening."],
    },
    {
      id: 85,
      question: "(Next week) we are going on a trip.",
      answer: ["It is next week that we are going on a trip."],
    },
    {
      id: 86,
      question: "She teaches (math) at the school.",
      answer: ["It is math that she teaches at the school."],
    },
    {
      id: 87,
      question: "I will meet (my friend) at the library.",
      answer: [
        "It is my friend who I will meet at the library.",
        "It is my friend that I will meet at the library.",
      ],
    },
    {
      id: 88,
      question: "(The children) are playing in the garden.",
      answer: [
        "It is the children who are playing in the garden.",
        "It is the children that are playing in the garden.",
      ],
    },
    {
      id: 89,
      question: "He always eats (breakfast) at 7 am.",
      answer: ["It is breakfast that he always eats at 7 am."],
    },
    {
      id: 90,
      question: "I will send (the email) tomorrow.",
      answer: ["It is the email that I will send tomorrow."],
    },
    {
      id: 91,
      question: "(The manager) will attend the meeting.",
      answer: [
        "It is the manager who will attend the meeting.",
        "It is the manager that will attend the meeting.",
      ],
    },
    {
      id: 92,
      question: "We are reading (the newspaper) every morning.",
      answer: ["It is the newspaper that we are reading every morning."],
    },
    {
      id: 93,
      question: "She will meet (her cousin) at the station.",
      answer: [
        "It is her cousin who she will meet at the station.",
        "It is her cousin that she will meet at the station.",
      ],
    },
    {
      id: 94,
      question: "(The students) will submit their reports today.",
      answer: [
        "It is the students who will submit their reports today.",
        "It is the students that will submit their reports today.",
      ],
    },
    {
      id: 95,
      question: "I am attending (the workshop) this afternoon.",
      answer: ["It is the workshop that I am attending this afternoon."],
    },
    {
      id: 96,
      question: "He plays (football) every weekend.",
      answer: ["It is football that he plays every weekend."],
    },
    {
      id: 97,
      question: "(The little girl) is singing a song.",
      answer: [
        "It is the little girl who is singing a song.",
        "It is the little girl that is singing a song.",
      ],
    },
    {
      id: 98,
      question: "She will visit (the park) tomorrow.",
      answer: ["It is the park that she will visit tomorrow."],
    },
    {
      id: 99,
      question: "I am meeting (the teacher) now.",
      answer: [
        "It is the teacher who I am meeting now.",
        "It is the teacher that I am meeting now.",
      ],
    },
    {
      id: 100,
      question: "(The team) will win the championship.",
      answer: [
        "It is the team who will win the championship.",
        "It is the team that will win the championship.",
      ],
    },
  ],
  "Not only ... but also": [
    {
      id: 1,
      question:
        "She completed her research on time. She presented it to an international conference.",
      answer: [
        "Not only did she complete her research on time, but she also presented it to an international conference.",
        "She not only completed her research on time but also presented it to an international conference.",
      ],
    },
    {
      id: 2,
      question:
        "The company implemented a new policy. It improved employee satisfaction.",
      answer: [
        "Not only did the company implement a new policy, but it also improved employee satisfaction.",
        "The company not only implemented a new policy but also improved employee satisfaction.",
      ],
    },
    {
      id: 3,
      question:
        "He has been working tirelessly. He still manages to teach part-time.",
      answer: [
        "Not only has he been working tirelessly, but he also manages to teach part-time.",
        "He has not only been working tirelessly but also manages to teach part-time.",
      ],
    },
    {
      id: 4,
      question:
        "The city has grown rapidly. Infrastructure could not keep pace.",
      answer: [
        "Not only has the city grown rapidly, but infrastructure has also not kept pace.",
        "The city has not only grown rapidly but infrastructure has also not kept pace.",
      ],
    },
    {
      id: 5,
      question:
        "She writes insightful essays. She delivers compelling speeches.",
      answer: [
        "Not only does she write insightful essays, but she also delivers compelling speeches.",
        "She not only writes insightful essays but also delivers compelling speeches.",
      ],
    },
    {
      id: 6,
      question:
        "He completed the marathon despite an injury. He still raised money for charity.",
      answer: [
        "Not only did he complete the marathon despite an injury, but he also raised money for charity.",
        "He not only completed the marathon despite an injury but also raised money for charity.",
      ],
    },
    {
      id: 7,
      question:
        "The new policy benefits employees. It encourages sustainable work practices.",
      answer: [
        "Not only does the new policy benefit employees, but it also encourages sustainable work practices.",
        "The new policy not only benefits employees but also encourages sustainable work practices.",
      ],
    },
    {
      id: 8,
      question:
        "The novel explores complex themes. It challenges conventional perspectives.",
      answer: [
        "Not only does the novel explore complex themes, but it also challenges conventional perspectives.",
        "The novel not only explores complex themes but also challenges conventional perspectives.",
      ],
    },
    {
      id: 9,
      question:
        "He managed to negotiate the deal successfully. He maintained excellent relationships with clients.",
      answer: [
        "Not only did he manage to negotiate the deal successfully, but he also maintained excellent relationships with clients.",
        "He not only managed to negotiate the deal successfully but also maintained excellent relationships with clients.",
      ],
    },
    {
      id: 10,
      question:
        "The government invested in education. It also focused on healthcare reforms.",
      answer: [
        "Not only did the government invest in education, but it also focused on healthcare reforms.",
        "The government not only invested in education but also focused on healthcare reforms.",
      ],
    },
    {
      id: 11,
      question: "The software is fast. It is also secure.",
      answer: [
        "Not only is the software fast, but it is also secure.",
        "The software is not only fast but also secure.",
      ],
    },
    {
      id: 12,
      question:
        "The actor received critical acclaim. He earned commercial success.",
      answer: [
        "Not only did the actor receive critical acclaim, but he also earned commercial success.",
        "The actor not only received critical acclaim but also earned commercial success.",
      ],
    },
    {
      id: 13,
      question: "She volunteers at the shelter. She mentors young students.",
      answer: [
        "Not only does she volunteer at the shelter, but she also mentors young students.",
        "She not only volunteers at the shelter but also mentors young students.",
      ],
    },
    {
      id: 14,
      question:
        "The research study revealed new insights. It also challenged previous assumptions.",
      answer: [
        "Not only did the research study reveal new insights, but it also challenged previous assumptions.",
        "The research study not only revealed new insights but also challenged previous assumptions.",
      ],
    },
    {
      id: 15,
      question:
        "He invested in renewable energy. He promoted environmental awareness.",
      answer: [
        "Not only did he invest in renewable energy, but he also promoted environmental awareness.",
        "He not only invested in renewable energy but also promoted environmental awareness.",
      ],
    },
    {
      id: 16,
      question: "The team won the championship. They broke several records.",
      answer: [
        "Not only did the team win the championship, but they also broke several records.",
        "The team not only won the championship but also broke several records.",
      ],
    },
    {
      id: 17,
      question:
        "She completed her PhD in record time. She published in top journals.",
      answer: [
        "Not only did she complete her PhD in record time, but she also published in top journals.",
        "She not only completed her PhD in record time but also published in top journals.",
      ],
    },
    {
      id: 18,
      question:
        "The scientist made a breakthrough. She collaborated with international experts.",
      answer: [
        "Not only did the scientist make a breakthrough, but she also collaborated with international experts.",
        "The scientist not only made a breakthrough but also collaborated with international experts.",
      ],
    },
    {
      id: 19,
      question:
        "The conference attracted top speakers. It engaged thousands of participants worldwide.",
      answer: [
        "Not only did the conference attract top speakers, but it also engaged thousands of participants worldwide.",
        "The conference not only attracted top speakers but also engaged thousands of participants worldwide.",
      ],
    },
    {
      id: 20,
      question:
        "He learned multiple languages. He mastered complex subjects at university.",
      answer: [
        "Not only did he learn multiple languages, but he also mastered complex subjects at university.",
        "He not only learned multiple languages but also mastered complex subjects at university.",
      ],
    },
    {
      id: 21,
      question:
        "She handled the crisis efficiently. She maintained public trust.",
      answer: [
        "Not only did she handle the crisis efficiently, but she also maintained public trust.",
        "She not only handled the crisis efficiently but also maintained public trust.",
      ],
    },
    {
      id: 22,
      question:
        "The novel is beautifully written. It presents a complex narrative.",
      answer: [
        "Not only is the novel beautifully written, but it also presents a complex narrative.",
        "The novel is not only beautifully written but also presents a complex narrative.",
      ],
    },
    {
      id: 23,
      question:
        "He researches climate change. He advocates for policy reforms.",
      answer: [
        "Not only does he research climate change, but he also advocates for policy reforms.",
        "He not only researches climate change but also advocates for policy reforms.",
      ],
    },
    {
      id: 24,
      question:
        "The artist created unique paintings. He also designed innovative sculptures.",
      answer: [
        "Not only did the artist create unique paintings, but he also designed innovative sculptures.",
        "The artist not only created unique paintings but also designed innovative sculptures.",
      ],
    },
    {
      id: 25,
      question:
        "She organized the charity event. She ensured maximum participation.",
      answer: [
        "Not only did she organize the charity event, but she also ensured maximum participation.",
        "She not only organized the charity event but also ensured maximum participation.",
      ],
    },
    {
      id: 26,
      question:
        "The engineer designed a sustainable building. He incorporated smart technology.",
      answer: [
        "Not only did the engineer design a sustainable building, but he also incorporated smart technology.",
        "The engineer not only designed a sustainable building but also incorporated smart technology.",
      ],
    },
    {
      id: 27,
      question:
        "He contributed to the debate. He provided comprehensive research.",
      answer: [
        "Not only did he contribute to the debate, but he also provided comprehensive research.",
        "He not only contributed to the debate but also provided comprehensive research.",
      ],
    },
    {
      id: 28,
      question:
        "The politician implemented reforms. She improved public services.",
      answer: [
        "Not only did the politician implement reforms, but she also improved public services.",
        "The politician not only implemented reforms but also improved public services.",
      ],
    },
    {
      id: 29,
      question: "She participates in competitions. She excels academically.",
      answer: [
        "Not only does she participate in competitions, but she also excels academically.",
        "She not only participates in competitions but also excels academically.",
      ],
    },
    {
      id: 30,
      question:
        "The chef prepared gourmet meals. He trained his apprentices meticulously.",
      answer: [
        "Not only did the chef prepare gourmet meals, but he also trained his apprentices meticulously.",
        "The chef not only prepared gourmet meals but also trained his apprentices meticulously.",
      ],
    },
    {
      id: 31,
      question:
        "He designed an efficient system. He reduced operational costs significantly.",
      answer: [
        "Not only did he design an efficient system, but he also reduced operational costs significantly.",
        "He not only designed an efficient system but also reduced operational costs significantly.",
      ],
    },
    {
      id: 32,
      question:
        "She conducted an experiment. She verified the results rigorously.",
      answer: [
        "Not only did she conduct an experiment, but she also verified the results rigorously.",
        "She not only conducted an experiment but also verified the results rigorously.",
      ],
    },
    {
      id: 33,
      question:
        "The architect planned a sustainable city. He integrated green spaces innovatively.",
      answer: [
        "Not only did the architect plan a sustainable city, but he also integrated green spaces innovatively.",
        "The architect not only planned a sustainable city but also integrated green spaces innovatively.",
      ],
    },
    {
      id: 34,
      question:
        "He wrote a complex novel. He incorporated philosophical themes.",
      answer: [
        "Not only did he write a complex novel, but he also incorporated philosophical themes.",
        "He not only wrote a complex novel but also incorporated philosophical themes.",
      ],
    },
    {
      id: 35,
      question: "She managed multiple projects. She ensured quality standards.",
      answer: [
        "Not only did she manage multiple projects, but she also ensured quality standards.",
        "She not only managed multiple projects but also ensured quality standards.",
      ],
    },
    {
      id: 36,
      question: "The athlete trained rigorously. He won international medals.",
      answer: [
        "Not only did the athlete train rigorously, but he also won international medals.",
        "The athlete not only trained rigorously but also won international medals.",
      ],
    },
    {
      id: 37,
      question:
        "She wrote critically acclaimed articles. She reviewed books professionally.",
      answer: [
        "Not only did she write critically acclaimed articles, but she also reviewed books professionally.",
        "She not only wrote critically acclaimed articles but also reviewed books professionally.",
      ],
    },
    {
      id: 38,
      question:
        "The engineer developed a new technology. It optimized energy consumption.",
      answer: [
        "Not only did the engineer develop a new technology, but it also optimized energy consumption.",
        "The engineer not only developed a new technology but it also optimized energy consumption.",
      ],
    },
    {
      id: 39,
      question: "He mentors students. He publishes research papers.",
      answer: [
        "Not only does he mentor students, but he also publishes research papers.",
        "He not only mentors students but also publishes research papers.",
      ],
    },
    {
      id: 40,
      question:
        "She manages a large team. She maintains a friendly environment.",
      answer: [
        "Not only does she manage a large team, but she also maintains a friendly environment.",
        "She not only manages a large team but also maintains a friendly environment.",
      ],
    },
    {
      id: 41,
      question:
        "The scientist analyzed the data carefully. She drew insightful conclusions.",
      answer: [
        "Not only did the scientist analyze the data carefully, but she also drew insightful conclusions.",
        "The scientist not only analyzed the data carefully but also drew insightful conclusions.",
      ],
    },
    {
      id: 42,
      question: "He teaches history. He supervises student projects.",
      answer: [
        "Not only does he teach history, but he also supervises student projects.",
        "He not only teaches history but also supervises student projects.",
      ],
    },
    {
      id: 43,
      question:
        "She founded a charity organization. She expanded it internationally.",
      answer: [
        "Not only did she found a charity organization, but she also expanded it internationally.",
        "She not only founded a charity organization but also expanded it internationally.",
      ],
    },
    {
      id: 44,
      question:
        "The company launched a new product. It exceeded sales expectations.",
      answer: [
        "Not only did the company launch a new product, but it also exceeded sales expectations.",
        "The company not only launched a new product but also exceeded sales expectations.",
      ],
    },
    {
      id: 45,
      question:
        "He solved the complex equation. He explained it clearly to the class.",
      answer: [
        "Not only did he solve the complex equation, but he also explained it clearly to the class.",
        "He not only solved the complex equation but also explained it clearly to the class.",
      ],
    },
    {
      id: 46,
      question:
        "She attended the international conference. She presented her research findings.",
      answer: [
        "Not only did she attend the international conference, but she also presented her research findings.",
        "She not only attended the international conference but also presented her research findings.",
      ],
    },
    {
      id: 47,
      question:
        "The artist designed a new gallery. He curated an innovative exhibition.",
      answer: [
        "Not only did the artist design a new gallery, but he also curated an innovative exhibition.",
        "The artist not only designed a new gallery but also curated an innovative exhibition.",
      ],
    },
    {
      id: 48,
      question: "He trained the team rigorously. They won the championship.",
      answer: [
        "Not only did he train the team rigorously, but they also won the championship.",
        "He not only trained the team rigorously but they also won the championship.",
      ],
    },
    {
      id: 49,
      question:
        "She wrote a detailed report. She submitted it before the deadline.",
      answer: [
        "Not only did she write a detailed report, but she also submitted it before the deadline.",
        "She not only wrote a detailed report but also submitted it before the deadline.",
      ],
    },
    {
      id: 50,
      question:
        "The engineer solved a technical problem. He improved the system efficiency.",
      answer: [
        "Not only did the engineer solve a technical problem, but he also improved the system efficiency.",
        "The engineer not only solved a technical problem but also improved the system efficiency.",
      ],
    },
    {
      id: 51,
      question:
        "He volunteers at the community center. He organizes educational workshops.",
      answer: [
        "Not only does he volunteer at the community center, but he also organizes educational workshops.",
        "He not only volunteers at the community center but also organizes educational workshops.",
      ],
    },
    {
      id: 52,
      question:
        "She conducted an extensive survey. She published the findings in a journal.",
      answer: [
        "Not only did she conduct an extensive survey, but she also published the findings in a journal.",
        "She not only conducted an extensive survey but also published the findings in a journal.",
      ],
    },
    {
      id: 53,
      question:
        "The manager implemented cost-saving measures. He maintained employee morale.",
      answer: [
        "Not only did the manager implement cost-saving measures, but he also maintained employee morale.",
        "The manager not only implemented cost-saving measures but also maintained employee morale.",
      ],
    },
    {
      id: 54,
      question:
        "He repaired the old bridge. He ensured it met modern safety standards.",
      answer: [
        "Not only did he repair the old bridge, but he also ensured it met modern safety standards.",
        "He not only repaired the old bridge but also ensured it met modern safety standards.",
      ],
    },
    {
      id: 55,
      question:
        "She mentors young scientists. She publishes her research in top journals.",
      answer: [
        "Not only does she mentor young scientists, but she also publishes her research in top journals.",
        "She not only mentors young scientists but also publishes her research in top journals.",
      ],
    },
    {
      id: 56,
      question:
        "The team designed an innovative solution. They reduced operational costs significantly.",
      answer: [
        "Not only did the team design an innovative solution, but they also reduced operational costs significantly.",
        "The team not only designed an innovative solution but also reduced operational costs significantly.",
      ],
    },
    {
      id: 57,
      question:
        "He solved the programming bug. He optimized the software performance.",
      answer: [
        "Not only did he solve the programming bug, but he also optimized the software performance.",
        "He not only solved the programming bug but also optimized the software performance.",
      ],
    },
    {
      id: 58,
      question:
        "She organized a successful exhibition. She attracted international visitors.",
      answer: [
        "Not only did she organize a successful exhibition, but she also attracted international visitors.",
        "She not only organized a successful exhibition but also attracted international visitors.",
      ],
    },
    {
      id: 59,
      question:
        "The company developed a new app. It received excellent reviews.",
      answer: [
        "Not only did the company develop a new app, but it also received excellent reviews.",
        "The company not only developed a new app but also received excellent reviews.",
      ],
    },
    {
      id: 60,
      question: "He analyzed historical documents. He presented a new theory.",
      answer: [
        "Not only did he analyze historical documents, but he also presented a new theory.",
        "He not only analyzed historical documents but also presented a new theory.",
      ],
    },
    {
      id: 61,
      question:
        "She prepared an impressive presentation. She answered all questions confidently.",
      answer: [
        "Not only did she prepare an impressive presentation, but she also answered all questions confidently.",
        "She not only prepared an impressive presentation but also answered all questions confidently.",
      ],
    },
    {
      id: 62,
      question:
        "The researcher studied climate patterns. She developed predictive models.",
      answer: [
        "Not only did the researcher study climate patterns, but she also developed predictive models.",
        "The researcher not only studied climate patterns but also developed predictive models.",
      ],
    },
    {
      id: 63,
      question:
        "He proposed a creative marketing plan. It increased customer engagement.",
      answer: [
        "Not only did he propose a creative marketing plan, but it also increased customer engagement.",
        "He not only proposed a creative marketing plan but it also increased customer engagement.",
      ],
    },
    {
      id: 64,
      question:
        "She designed a sustainable garden. She incorporated innovative irrigation techniques.",
      answer: [
        "Not only did she design a sustainable garden, but she also incorporated innovative irrigation techniques.",
        "She not only designed a sustainable garden but also incorporated innovative irrigation techniques.",
      ],
    },
    {
      id: 65,
      question:
        "The student solved the complex problem. He explained it to the class clearly.",
      answer: [
        "Not only did the student solve the complex problem, but he also explained it to the class clearly.",
        "The student not only solved the complex problem but also explained it to the class clearly.",
      ],
    },
    {
      id: 66,
      question:
        "He managed multiple projects simultaneously. He met every deadline successfully.",
      answer: [
        "Not only did he manage multiple projects simultaneously, but he also met every deadline successfully.",
        "He not only managed multiple projects simultaneously but also met every deadline successfully.",
      ],
    },
    {
      id: 67,
      question:
        "She conducted workshops for students. She evaluated their progress rigorously.",
      answer: [
        "Not only did she conduct workshops for students, but she also evaluated their progress rigorously.",
        "She not only conducted workshops for students but also evaluated their progress rigorously.",
      ],
    },
    {
      id: 68,
      question:
        "The architect designed an energy-efficient building. He incorporated smart technologies.",
      answer: [
        "Not only did the architect design an energy-efficient building, but he also incorporated smart technologies.",
        "The architect not only designed an energy-efficient building but also incorporated smart technologies.",
      ],
    },
    {
      id: 69,
      question:
        "He wrote a comprehensive report. He submitted it ahead of schedule.",
      answer: [
        "Not only did he write a comprehensive report, but he also submitted it ahead of schedule.",
        "He not only wrote a comprehensive report but also submitted it ahead of schedule.",
      ],
    },
    {
      id: 70,
      question:
        "She participates in international conferences. She publishes her findings globally.",
      answer: [
        "Not only does she participate in international conferences, but she also publishes her findings globally.",
        "She not only participates in international conferences but also publishes her findings globally.",
      ],
    },
    {
      id: 71,
      question:
        "He studied multiple disciplines. He applied the knowledge innovatively.",
      answer: [
        "Not only did he study multiple disciplines, but he also applied the knowledge innovatively.",
        "He not only studied multiple disciplines but also applied the knowledge innovatively.",
      ],
    },
    {
      id: 72,
      question:
        "She led a team of engineers. She delivered a successful project.",
      answer: [
        "Not only did she lead a team of engineers, but she also delivered a successful project.",
        "She not only led a team of engineers but also delivered a successful project.",
      ],
    },
    {
      id: 73,
      question:
        "The author wrote a compelling novel. She incorporated historical facts.",
      answer: [
        "Not only did the author write a compelling novel, but she also incorporated historical facts.",
        "The author not only wrote a compelling novel but also incorporated historical facts.",
      ],
    },
    {
      id: 74,
      question:
        "He manages a busy office. He maintains excellent client relationships.",
      answer: [
        "Not only does he manage a busy office, but he also maintains excellent client relationships.",
        "He not only manages a busy office but also maintains excellent client relationships.",
      ],
    },
    {
      id: 75,
      question:
        "She researches ancient manuscripts. She deciphers them accurately.",
      answer: [
        "Not only does she research ancient manuscripts, but she also deciphers them accurately.",
        "She not only researches ancient manuscripts but also deciphers them accurately.",
      ],
    },
    {
      id: 76,
      question:
        "The engineer improved the software. He implemented new security features.",
      answer: [
        "Not only did the engineer improve the software, but he also implemented new security features.",
        "The engineer not only improved the software but also implemented new security features.",
      ],
    },
    {
      id: 77,
      question:
        "He conducted experiments meticulously. He published the results in a journal.",
      answer: [
        "Not only did he conduct experiments meticulously, but he also published the results in a journal.",
        "He not only conducted experiments meticulously but also published the results in a journal.",
      ],
    },
    {
      id: 78,
      question:
        "She organizes art exhibitions. She promotes young artists globally.",
      answer: [
        "Not only does she organize art exhibitions, but she also promotes young artists globally.",
        "She not only organizes art exhibitions but also promotes young artists globally.",
      ],
    },
    {
      id: 79,
      question: "He analyzed economic trends. He advised major corporations.",
      answer: [
        "Not only did he analyze economic trends, but he also advised major corporations.",
        "He not only analyzed economic trends but also advised major corporations.",
      ],
    },
    {
      id: 80,
      question:
        "The athlete trained intensively. He achieved a record-breaking performance.",
      answer: [
        "Not only did the athlete train intensively, but he also achieved a record-breaking performance.",
        "The athlete not only trained intensively but also achieved a record-breaking performance.",
      ],
    },
    {
      id: 81,
      question: "She solved challenging puzzles. She mentored other students.",
      answer: [
        "Not only did she solve challenging puzzles, but she also mentored other students.",
        "She not only solved challenging puzzles but also mentored other students.",
      ],
    },
    {
      id: 82,
      question:
        "He discovered a new chemical compound. He explained its applications.",
      answer: [
        "Not only did he discover a new chemical compound, but he also explained its applications.",
        "He not only discovered a new chemical compound but also explained its applications.",
      ],
    },
    {
      id: 83,
      question:
        "The team completed a difficult project. They received an award for excellence.",
      answer: [
        "Not only did the team complete a difficult project, but they also received an award for excellence.",
        "The team not only completed a difficult project but also received an award for excellence.",
      ],
    },
    {
      id: 84,
      question:
        "She wrote a detailed analysis. She presented it to the board of directors.",
      answer: [
        "Not only did she write a detailed analysis, but she also presented it to the board of directors.",
        "She not only wrote a detailed analysis but also presented it to the board of directors.",
      ],
    },
    {
      id: 85,
      question:
        "He led the research initiative. He secured international funding.",
      answer: [
        "Not only did he lead the research initiative, but he also secured international funding.",
        "He not only led the research initiative but also secured international funding.",
      ],
    },
    {
      id: 86,
      question:
        "She participated in the marathon. She raised funds for charity.",
      answer: [
        "Not only did she participate in the marathon, but she also raised funds for charity.",
        "She not only participated in the marathon but also raised funds for charity.",
      ],
    },
    {
      id: 87,
      question:
        "The architect designed a modern museum. He incorporated eco-friendly features.",
      answer: [
        "Not only did the architect design a modern museum, but he also incorporated eco-friendly features.",
        "The architect not only designed a modern museum but also incorporated eco-friendly features.",
      ],
    },
    {
      id: 88,
      question:
        "He completed the assignment early. He corrected all errors meticulously.",
      answer: [
        "Not only did he complete the assignment early, but he also corrected all errors meticulously.",
        "He not only completed the assignment early but also corrected all errors meticulously.",
      ],
    },
    {
      id: 89,
      question:
        "She conducted a complex experiment. She analyzed the results precisely.",
      answer: [
        "Not only did she conduct a complex experiment, but she also analyzed the results precisely.",
        "She not only conducted a complex experiment but also analyzed the results precisely.",
      ],
    },
    {
      id: 90,
      question:
        "The teacher prepared an engaging lesson. She encouraged active participation.",
      answer: [
        "Not only did the teacher prepare an engaging lesson, but she also encouraged active participation.",
        "The teacher not only prepared an engaging lesson but also encouraged active participation.",
      ],
    },
    {
      id: 91,
      question:
        "He led the fundraising campaign. He motivated volunteers effectively.",
      answer: [
        "Not only did he lead the fundraising campaign, but he also motivated volunteers effectively.",
        "He not only led the fundraising campaign but also motivated volunteers effectively.",
      ],
    },
    {
      id: 92,
      question:
        "She managed multiple departments. She implemented innovative strategies.",
      answer: [
        "Not only did she manage multiple departments, but she also implemented innovative strategies.",
        "She not only managed multiple departments but also implemented innovative strategies.",
      ],
    },
    {
      id: 93,
      question:
        "The scientist discovered an innovative technique. He collaborated with other experts.",
      answer: [
        "Not only did the scientist discover an innovative technique, but he also collaborated with other experts.",
        "The scientist not only discovered an innovative technique but also collaborated with other experts.",
      ],
    },
    {
      id: 94,
      question:
        "He analyzed financial markets. He predicted trends accurately.",
      answer: [
        "Not only did he analyze financial markets, but he also predicted trends accurately.",
        "He not only analyzed financial markets but also predicted trends accurately.",
      ],
    },
    {
      id: 95,
      question:
        "She completed her thesis early. She presented it at an international seminar.",
      answer: [
        "Not only did she complete her thesis early, but she also presented it at an international seminar.",
        "She not only completed her thesis early but also presented it at an international seminar.",
      ],
    },
    {
      id: 96,
      question:
        "The programmer debugged the software efficiently. He added new features.",
      answer: [
        "Not only did the programmer debug the software efficiently, but he also added new features.",
        "The programmer not only debugged the software efficiently but also added new features.",
      ],
    },
    {
      id: 97,
      question:
        "He participated in international workshops. He shared his research findings.",
      answer: [
        "Not only did he participate in international workshops, but he also shared his research findings.",
        "He not only participated in international workshops but also shared his research findings.",
      ],
    },
    {
      id: 98,
      question:
        "She led the design team. She ensured adherence to sustainability guidelines.",
      answer: [
        "Not only did she lead the design team, but she also ensured adherence to sustainability guidelines.",
        "She not only led the design team but also ensured adherence to sustainability guidelines.",
      ],
    },
    {
      id: 99,
      question:
        "The committee drafted a new policy. It considered all stakeholder opinions.",
      answer: [
        "Not only did the committee draft a new policy, but it also considered all stakeholder opinions.",
        "The committee not only drafted a new policy but also considered all stakeholder opinions.",
      ],
    },
    {
      id: 100,
      question:
        "He innovated a teaching method. He improved student engagement significantly.",
      answer: [
        "Not only did he innovate a teaching method, but he also improved student engagement significantly.",
        "He not only innovated a teaching method but also improved student engagement significantly.",
      ],
    },
  ],
  "-ed and -ing adjectives": [
    {
      id: 1,
      question:
        "I'm disappointing/disappointed that you can't come to my wedding.",
      answer: ["disappointed"],
    },
    {
      id: 2,
      question: "The movie was excite/exciting from start to finish.",
      answer: ["exciting"],
    },
    {
      id: 3,
      question: "She felt embarrass/embarrassed after tripping in public.",
      answer: ["embarrassed"],
    },
    {
      id: 4,
      question: "He looks bore/boring during the lecture.",
      answer: ["bored"],
    },
    {
      id: 5,
      question: "The children are tire/tired after the long trip.",
      answer: ["tired"],
    },
    {
      id: 6,
      question: "The book was interest/interesting and kept me up all night.",
      answer: ["interesting"],
    },
    {
      id: 7,
      question: "I am confuse/confused by his explanation.",
      answer: ["confused"],
    },
    {
      id: 8,
      question: "She is annoy/annoyed by the loud noise from next door.",
      answer: ["annoyed"],
    },
    {
      id: 9,
      question: "The speech was inspire/inspiring for all the students.",
      answer: ["inspiring"],
    },
    {
      id: 10,
      question: "They felt fright/frightened when they saw the dark alley.",
      answer: ["frightened"],
    },
    {
      id: 11,
      question: "He is amuse/amused by the comedian's jokes.",
      answer: ["amused"],
    },
    {
      id: 12,
      question:
        "The situation is worry/worrying and needs immediate attention.",
      answer: ["worrying"],
    },
    {
      id: 13,
      question: "I was amaze/amazed by her performance.",
      answer: ["amazed"],
    },
    {
      id: 14,
      question: "The task seems confuse/confusing to most of the students.",
      answer: ["confusing"],
    },
    {
      id: 15,
      question: "She is interest/interested in learning new languages.",
      answer: ["interested"],
    },
    {
      id: 16,
      question: "The weather is bore/boring today, nothing exciting to do.",
      answer: ["boring"],
    },
    {
      id: 17,
      question: "I am fright/frightened to go into the abandoned house.",
      answer: ["frightened"],
    },
    {
      id: 18,
      question: "The teacher looks tire/tiring after a long day of classes.",
      answer: ["tired"],
    },
    {
      id: 19,
      question: "He is depress/depressed after losing the match.",
      answer: ["depressed"],
    },
    {
      id: 20,
      question: "The lecture was exhaust/exhausting, but very informative.",
      answer: ["exhausting"],
    },
    {
      id: 21,
      question: "She felt relax/relaxed after the yoga session.",
      answer: ["relaxed"],
    },
    {
      id: 22,
      question:
        "The story was fascinate/fascinating and kept everyone engaged.",
      answer: ["fascinating"],
    },
    {
      id: 23,
      question: "I am satisfy/satisfied with the results of my project.",
      answer: ["satisfied"],
    },
    {
      id: 24,
      question:
        "The challenge was frustrate/frustrating, but rewarding in the end.",
      answer: ["frustrating"],
    },
    {
      id: 25,
      question: "He seemed confuse/confused by the instructions.",
      answer: ["confused"],
    },
    {
      id: 26,
      question:
        "The presentation was depress/depressing and made us reflect deeply.",
      answer: ["depressing"],
    },
    {
      id: 27,
      question: "She felt shock/shocked at the sudden news.",
      answer: ["shocked"],
    },
    {
      id: 28,
      question: "The news was shock/shocking to the entire community.",
      answer: ["shocking"],
    },
    {
      id: 29,
      question: "He was exhaust/exhausted after running the marathon.",
      answer: ["exhausted"],
    },
    {
      id: 30,
      question: "The movie was terrify/terrifying and kept us on edge.",
      answer: ["terrifying"],
    },
    {
      id: 31,
      question: "She felt confuse/confused by the complex instructions.",
      answer: ["confused"],
    },
    {
      id: 32,
      question: "The lecture was interest/interesting and full of examples.",
      answer: ["interesting"],
    },
    {
      id: 33,
      question: "He was bore/boring during the long ceremony.",
      answer: ["bored"],
    },
    {
      id: 34,
      question: "The rollercoaster ride was excite/exciting for the kids.",
      answer: ["exciting"],
    },
    {
      id: 35,
      question: "I am amaze/amazed at how quickly she solved the puzzle.",
      answer: ["amazed"],
    },
    {
      id: 36,
      question: "The noise outside is annoy/annoying.",
      answer: ["annoying"],
    },
    {
      id: 37,
      question: "He was depress/depressed after the team lost.",
      answer: ["depressed"],
    },
    {
      id: 38,
      question: "The work is exhaust/exhausting but rewarding.",
      answer: ["exhausting"],
    },
    {
      id: 39,
      question: "She was tire/tired after a long day at school.",
      answer: ["tired"],
    },
    {
      id: 40,
      question: "The magician’s performance was amaze/amazing.",
      answer: ["amazing"],
    },
    {
      id: 41,
      question: "The story was fright/frightening for young children.",
      answer: ["frightening"],
    },
    {
      id: 42,
      question: "He felt fright/frightened when the lights went out.",
      answer: ["frightened"],
    },
    {
      id: 43,
      question: "The comedian was amuse/amusing everyone with his jokes.",
      answer: ["amusing"],
    },
    {
      id: 44,
      question: "She was amuse/amused by the clever prank.",
      answer: ["amused"],
    },
    {
      id: 45,
      question: "The task was confuse/confusing to the new students.",
      answer: ["confusing"],
    },
    {
      id: 46,
      question: "He felt confuse/confused by the sudden change in plans.",
      answer: ["confused"],
    },
    {
      id: 47,
      question: "The lecture was bore/boring because it lacked examples.",
      answer: ["boring"],
    },
    {
      id: 48,
      question: "I am excite/excited about the upcoming concert.",
      answer: ["excited"],
    },
    {
      id: 49,
      question: "The situation is worry/worrying and needs careful attention.",
      answer: ["worrying"],
    },
    {
      id: 50,
      question: "He was worry/worried about missing the deadline.",
      answer: ["worried"],
    },
    {
      id: 51,
      question: "She is interest/interested in learning Spanish.",
      answer: ["interested"],
    },
    {
      id: 52,
      question: "The movie was interest/interesting and full of suspense.",
      answer: ["interesting"],
    },
    {
      id: 53,
      question: "He was frustrate/frustrated by the slow progress.",
      answer: ["frustrated"],
    },
    {
      id: 54,
      question: "The situation is frustrate/frustrating for everyone involved.",
      answer: ["frustrating"],
    },
    {
      id: 55,
      question: "I am satisfy/satisfied with the results of my exam.",
      answer: ["satisfied"],
    },
    {
      id: 56,
      question: "The outcome was satisfy/satisfying and exceeded expectations.",
      answer: ["satisfying"],
    },
    {
      id: 57,
      question: "She felt shock/shocked by the sudden announcement.",
      answer: ["shocked"],
    },
    {
      id: 58,
      question: "The news was shock/shocking and unexpected.",
      answer: ["shocking"],
    },
    {
      id: 59,
      question: "He was depress/depressed after hearing the bad news.",
      answer: ["depressed"],
    },
    {
      id: 60,
      question: "The documentary was depress/depressing and deeply moving.",
      answer: ["depressing"],
    },
    {
      id: 61,
      question: "The child was excite/excited to open the gift.",
      answer: ["excited"],
    },
    {
      id: 62,
      question: "The party was excite/exciting with music and dancing.",
      answer: ["exciting"],
    },
    {
      id: 63,
      question: "I am tire/tired after running five kilometers.",
      answer: ["tired"],
    },
    {
      id: 64,
      question: "The hike was tire/tiring but enjoyable.",
      answer: ["tiring"],
    },
    {
      id: 65,
      question: "She felt embarrass/embarrassed when she forgot the lines.",
      answer: ["embarrassed"],
    },
    {
      id: 66,
      question:
        "The performance was embarrass/embarrassing because of the mistakes.",
      answer: ["embarrassing"],
    },
    {
      id: 67,
      question: "He is confuse/confused by the instructions on the package.",
      answer: ["confused"],
    },
    {
      id: 68,
      question: "The task is confuse/confusing and needs clarification.",
      answer: ["confusing"],
    },
    {
      id: 69,
      question: "She felt amaze/amazed by the breathtaking view.",
      answer: ["amazed"],
    },
    {
      id: 70,
      question: "The artwork was amaze/amazing and drew admiration.",
      answer: ["amazing"],
    },
    {
      id: 71,
      question: "The lecture was bore/boring and many students nodded off.",
      answer: ["boring"],
    },
    {
      id: 72,
      question: "He felt bore/bored during the long speech.",
      answer: ["bored"],
    },
    {
      id: 73,
      question: "The child was fright/frightened by the loud thunder.",
      answer: ["frightened"],
    },
    {
      id: 74,
      question: "The haunted house was fright/frightening for visitors.",
      answer: ["frightening"],
    },
    {
      id: 75,
      question: "He is annoy/annoyed by the constant interruptions.",
      answer: ["annoyed"],
    },
    {
      id: 76,
      question: "The dripping faucet is annoy/annoying me.",
      answer: ["annoying"],
    },
    {
      id: 77,
      question: "She felt depress/depressed after the argument.",
      answer: ["depressed"],
    },
    {
      id: 78,
      question: "The movie was depress/depressing and quite sad.",
      answer: ["depressing"],
    },
    {
      id: 79,
      question: "I am excite/excited for the weekend trip.",
      answer: ["excited"],
    },
    {
      id: 80,
      question: "The rollercoaster ride was excite/exciting and thrilling.",
      answer: ["exciting"],
    },
    {
      id: 81,
      question: "He was exhaust/exhausted after working all day.",
      answer: ["exhausted"],
    },
    {
      id: 82,
      question: "The schedule is exhaust/exhausting and nonstop.",
      answer: ["exhausting"],
    },
    {
      id: 83,
      question: "She is interest/interested in volunteering abroad.",
      answer: ["interested"],
    },
    {
      id: 84,
      question: "The workshop was interest/interesting and informative.",
      answer: ["interesting"],
    },
    {
      id: 85,
      question: "He felt shock/shocked by the sudden change in plans.",
      answer: ["shocked"],
    },
    {
      id: 86,
      question: "The news was shock/shocking and unexpected.",
      answer: ["shocking"],
    },
    {
      id: 87,
      question: "The audience was amuse/amused by the clown’s antics.",
      answer: ["amused"],
    },
    {
      id: 88,
      question: "The performance was amuse/amusing and made everyone laugh.",
      answer: ["amusing"],
    },
    {
      id: 89,
      question: "She was frustrate/frustrated with the repeated errors.",
      answer: ["frustrated"],
    },
    {
      id: 90,
      question: "The test was frustrate/frustrating and challenging.",
      answer: ["frustrating"],
    },
    {
      id: 91,
      question: "He felt relax/relaxed after a long walk in the park.",
      answer: ["relaxed"],
    },
    {
      id: 92,
      question: "The massage was relax/relaxing and pleasant.",
      answer: ["relaxing"],
    },
    {
      id: 93,
      question: "The movie was terrify/terrifying and kept us on edge.",
      answer: ["terrifying"],
    },
    {
      id: 94,
      question: "He felt terrify/terrified by the sudden noise.",
      answer: ["terrified"],
    },
    {
      id: 95,
      question: "She was exhaust/exhausted after studying all night.",
      answer: ["exhausted"],
    },
    {
      id: 96,
      question: "The work was exhaust/exhausting and required full attention.",
      answer: ["exhausting"],
    },
    {
      id: 97,
      question: "He is excite/excited to meet his favorite author.",
      answer: ["excited"],
    },
    {
      id: 98,
      question: "The show was excite/exciting with many surprises.",
      answer: ["exciting"],
    },
    {
      id: 99,
      question: "She felt embarrass/embarrassed during the awkward silence.",
      answer: ["embarrassed"],
    },
    {
      id: 100,
      question: "The mistake was embarrass/embarrassing but forgivable.",
      answer: ["embarrassing"],
    },
  ],
  "Adjectives with prepositions": [
    {
      id: 1,
      question:
        "My parents are not (A. worried about, B. aware of, C. pleased with) me as they know that I can take care of myself.",
      answer: ["A"],
    },
    {
      id: 2,
      question:
        "She was extremely (A. satisfied with, B. excited about, C. famous for) the news of her promotion.",
      answer: ["B"],
    },
    {
      id: 3,
      question:
        "He is always (A. interested in, B. afraid of, C. jealous of) his sister’s achievements.",
      answer: ["C"],
    },
    {
      id: 4,
      question:
        "The students were (A. aware of, B. tired of, C. responsible for) the repetitive tasks assigned by the teacher.",
      answer: ["B"],
    },
    {
      id: 5,
      question:
        "She is (A. famous for, B. good at, C. afraid of) playing the violin beautifully.",
      answer: ["B"],
    },
    {
      id: 6,
      question:
        "He is (A. proud of, B. worried about, C. interested in) his son’s accomplishments.",
      answer: ["A"],
    },
    {
      id: 7,
      question:
        "The manager was (A. afraid of, B. interested in, C. annoyed with) the repeated mistakes in the report.",
      answer: ["C"],
    },
    {
      id: 8,
      question:
        "They were (A. jealous of, B. responsible for, C. excited about) the upcoming trip abroad.",
      answer: ["C"],
    },
    {
      id: 9,
      question:
        "She felt (A. good at , B. embarrassed about, C. afraid of) forgetting the lines during the performance.",
      answer: ["B"],
    },
    {
      id: 10,
      question:
        "The scientist was (A. worried about, B. fascinated by, C. pleased with) the new discovery.",
      answer: ["B"],
    },
    {
      id: 11,
      question:
        "He is (A. afraid of, B. tired of, C. keen on) learning new languages.",
      answer: ["C"],
    },
    {
      id: 12,
      question:
        "The teacher is (A. satisfied with, B. jealous of, C. afraid of) the students’ progress.",
      answer: ["A"],
    },
    {
      id: 13,
      question:
        "She is (A. afraid of, B. interested in, C. good at) the new course.",
      answer: ["B"],
    },
    {
      id: 14,
      question:
        "He is (A. worried about, B. proud of, C. famous for) his daughter’s exam results.",
      answer: ["B"],
    },
    {
      id: 15,
      question:
        "The tourists were (A. tired of, B. excited about, C. afraid of) waiting in line for hours.",
      answer: ["B"],
    },
    {
      id: 16,
      question:
        "He is (A. good at, B. jealous of, C. fascinated by) solving complex puzzles.",
      answer: ["A"],
    },
    {
      id: 17,
      question:
        "She felt (A. pleased with, B. afraid of, C. interested in) her performance in the play.",
      answer: ["A"],
    },
    {
      id: 18,
      question:
        "The child was (A. fascinated by, B. tired of, C. worried about) the magic show.",
      answer: ["A"],
    },
    {
      id: 19,
      question:
        "He is (A. responsible for, B. jealous of, C. good at) managing the team efficiently.",
      answer: ["C"],
    },
    {
      id: 20,
      question:
        "She is (A. afraid of, B. famous for, C. interested in) speaking in public.",
      answer: ["C"],
    },
    {
      id: 21,
      question:
        "He is (A. afraid of, B. interested in, C. proud of) trying new sports.",
      answer: ["B"],
    },
    {
      id: 22,
      question:
        "The students were (A. tired of, B. fascinated by, C. jealous of) the long lecture.",
      answer: ["B"],
    },
    {
      id: 23,
      question:
        "She is (A. satisfied with, B. afraid of, C. excited about) her exam results.",
      answer: ["C"],
    },
    {
      id: 24,
      question:
        "The actor is (A. famous for, B. worried about, C. pleased with) his humanitarian work.",
      answer: ["C"],
    },
    {
      id: 25,
      question:
        "He was (A. jealous of, B. interested in, C. afraid of) his friend’s promotion.",
      answer: ["A"],
    },
    {
      id: 26,
      question:
        "The teacher is (A. proud of, B. fascinated by, C. tired of) the students’ improvements.",
      answer: ["B"],
    },
    {
      id: 27,
      question:
        "She felt (A. embarrassed about, B. excited about, C. pleased with) forgetting her lines.",
      answer: ["B"],
    },
    {
      id: 28,
      question:
        "The team was (A. worried about, B. satisfied with, C. jealous of) winning the championship.",
      answer: ["B"],
    },
    {
      id: 29,
      question:
        "He is (A. good at, B. afraid of, C. interested in) mathematics competitions.",
      answer: ["A"],
    },
    {
      id: 30,
      question:
        "She is (A. fascinated by, B. tired of, C. responsible for) astronomy.",
      answer: ["A"],
    },
    {
      id: 31,
      question:
        "The child is (A. afraid of, B. excited about, C. pleased with) the dark room.",
      answer: ["B"],
    },
    {
      id: 32,
      question:
        "He was (A. tired of, B. fascinated by, C. interested in) waiting in line.",
      answer: ["C"],
    },
    {
      id: 33,
      question:
        "She is (A. proud of, B. jealous of, C. afraid of) completing her first marathon.",
      answer: ["A"],
    },
    {
      id: 34,
      question:
        "They were (A. excited about, B. responsible for, C. pleased with) the holiday trip.",
      answer: ["C"],
    },
    {
      id: 35,
      question:
        "He felt (A. embarrassed about, B. fascinated by, C. interested in) the mistake he made.",
      answer: ["B"],
    },
    {
      id: 36,
      question:
        "She is (A. interested in, B. afraid of, C. tired of) learning new languages.",
      answer: ["A"],
    },
    {
      id: 37,
      question:
        "He is (A. responsible for, B. jealous of, C. excited about) managing the project.",
      answer: ["C"],
    },
    {
      id: 38,
      question:
        "The scientist was (A. fascinated by, B. tired of, C. worried about) the experiment results.",
      answer: ["A"],
    },
    {
      id: 39,
      question:
        "She is (A. worried about, B. proud of, C. interested in) her friend’s health.",
      answer: ["B"],
    },
    {
      id: 40,
      question:
        "He is (A. excited about, B. fascinated by, C. tired of) the new technology.",
      answer: ["B"],
    },
    {
      id: 41,
      question:
        "They were (A. jealous of, B. proud of, C. fascinated by) their colleague’s achievements.",
      answer: ["C"],
    },
    {
      id: 42,
      question:
        "She felt (A. pleased with, B. tired of, C. afraid of) the completed artwork.",
      answer: ["A"],
    },
    {
      id: 43,
      question:
        "He is (A. good at, B. fascinated by, C. afraid of) painting landscapes.",
      answer: ["A"],
    },
    {
      id: 44,
      question:
        "The teacher was (A. proud of, B. excited about, C. jealous of) the students’ performance.",
      answer: ["B"],
    },
    {
      id: 45,
      question:
        "She is (A. fascinated by, B. responsible for, C. tired of) classical music.",
      answer: ["C"],
    },
    {
      id: 46,
      question:
        "He is (A. afraid of, B. satisfied with, C. jealous of) making mistakes.",
      answer: ["B"],
    },
    {
      id: 47,
      question:
        "They were (A. excited about, B. tired of, C. interested in) the science exhibition.",
      answer: ["A"],
    },
    {
      id: 48,
      question:
        "She is (A. pleased with, B. fascinated by, C. jealous of) the final project.",
      answer: ["B"],
    },
    {
      id: 49,
      question:
        "He is (A. interested in, B. tired of, C. worried about) the new course.",
      answer: ["C"],
    },
    {
      id: 50,
      question:
        "The child felt (A. afraid of, B. proud of, C. fascinated by) the thunderstorm.",
      answer: ["B"],
    },
    {
      id: 51,
      question:
        "He is (A. responsible for, B. fascinated by, C. excited about) coordinating the event.",
      answer: ["C"],
    },
    {
      id: 52,
      question:
        "She felt (A. embarrassed about, B. pleased with, C. jealous of) the wrong answer she gave.",
      answer: ["B"],
    },
    {
      id: 53,
      question:
        "They were (A. fascinated by, B. proud of, C. tired of) the historical documentary.",
      answer: ["A"],
    },
    {
      id: 54,
      question:
        "He is (A. worried about, B. interested in, C. jealous of) his health condition.",
      answer: ["C"],
    },
    {
      id: 55,
      question:
        "She is (A. excited about, B. tired of, C. responsible for) the upcoming festival.",
      answer: ["A"],
    },
    {
      id: 56,
      question:
        "The students were (A. proud of, B. jealous of, C. fascinated by) their science projects.",
      answer: ["C"],
    },
    {
      id: 57,
      question:
        "He felt (A. satisfied with, B. afraid of, C. tired of) the test results.",
      answer: ["A"],
    },
    {
      id: 58,
      question:
        "She is (A. interested in, B. jealous of, C. afraid of) volunteering abroad.",
      answer: ["A"],
    },
    {
      id: 59,
      question:
        "He is (A. good at, B. pleased with, C. fascinated by) solving complex problems.",
      answer: ["C"],
    },
    {
      id: 60,
      question:
        "They were (A. tired of, B. excited about, C. proud of) the long journey.",
      answer: ["B"],
    },
    {
      id: 61,
      question:
        "She is (A. pleased with, B. fascinated by, C. afraid of) the completed presentation.",
      answer: ["B"],
    },
    {
      id: 62,
      question:
        "He is (A. responsible for, B. jealous of, C. interested in) the office accounts.",
      answer: ["C"],
    },
    {
      id: 63,
      question:
        "The audience was (A. fascinated by, B. tired of, C. afraid of) the magic show.",
      answer: ["A"],
    },
    {
      id: 64,
      question:
        "She is (A. afraid of, B. pleased with, C. excited about) the storm outside.",
      answer: ["C"],
    },
    {
      id: 65,
      question:
        "He is (A. proud of, B. fascinated by, C. tired of) his daughter’s painting.",
      answer: ["B"],
    },
    {
      id: 66,
      question:
        "They were (A. tired of, B. interested in, C. jealous of) the noisy neighbors.",
      answer: ["B"],
    },
    {
      id: 67,
      question:
        "She felt (A. embarrassed about, B. fascinated by, C. worried about) forgetting her speech.",
      answer: ["C"],
    },
    {
      id: 68,
      question:
        "He is (A. good at, B. jealous of, C. interested in) cooking traditional dishes.",
      answer: ["A"],
    },
    {
      id: 69,
      question:
        "The teacher was (A. satisfied with, B. fascinated by, C. afraid of) the students’ answers.",
      answer: ["B"],
    },
    {
      id: 70,
      question:
        "She is (A. fascinated by, B. responsible for, C. afraid of) the ancient ruins.",
      answer: ["A"],
    },
    {
      id: 71,
      question:
        "He felt (A. afraid of, B. pleased with, C. excited about) the challenging climb.",
      answer: ["B"],
    },
    {
      id: 72,
      question:
        "They were (A. proud of, B. tired of, C. jealous of) winning the competition.",
      answer: ["A"],
    },
    {
      id: 73,
      question:
        "She is (A. interested in, B. fascinated by, C. afraid of) reading scientific journals.",
      answer: ["B"],
    },
    {
      id: 74,
      question:
        "He is (A. worried about, B. good at, C. fascinated by) finishing the project on time.",
      answer: ["A"],
    },
    {
      id: 75,
      question:
        "They were (A. excited about, B. proud of, C. tired of) the weekend trip.",
      answer: ["C"],
    },
    {
      id: 76,
      question:
        "She is (A. pleased with, B. fascinated by, C. afraid of) her exam performance.",
      answer: ["A"],
    },
    {
      id: 77,
      question:
        "He is (A. responsible for, B. jealous of, C. interested in) maintaining the garden.",
      answer: ["B"],
    },
    {
      id: 78,
      question:
        "The audience was (A. fascinated by, B. tired of, C. worried about) the speech.",
      answer: ["C"],
    },
    {
      id: 79,
      question:
        "She is (A. afraid of, B. pleased with, C. excited about) speaking in front of a crowd.",
      answer: ["C"],
    },
    {
      id: 80,
      question:
        "He is (A. proud of, B. fascinated by, C. tired of) his team’s achievements.",
      answer: ["B"],
    },
    {
      id: 81,
      question:
        "They were (A. tired of, B. interested in, C. excited about) the long wait.",
      answer: ["C"],
    },
    {
      id: 82,
      question:
        "She is (A. pleased with, B. fascinated by, C. afraid of) the art exhibition.",
      answer: ["B"],
    },
    {
      id: 83,
      question:
        "He is (A. good at, B. jealous of, C. responsible for) chess tournaments.",
      answer: ["C"],
    },
    {
      id: 84,
      question:
        "The teacher was (A. satisfied with, B. fascinated by, C. afraid of) the project submissions.",
      answer: ["A"],
    },
    {
      id: 85,
      question:
        "She is (A. fascinated by, B. responsible for, C. tired of) wildlife documentaries.",
      answer: ["C"],
    },
    {
      id: 86,
      question:
        "He felt (A. embarrassed about, B. excited about, C. pleased with) forgetting his lines.",
      answer: ["B"],
    },
    {
      id: 87,
      question:
        "They were (A. jealous of, B. fascinated by, C. proud of) the new student’s achievements.",
      answer: ["C"],
    },
    {
      id: 88,
      question:
        "She is (A. interested in, B. afraid of, C. pleased with) volunteering at the shelter.",
      answer: ["A"],
    },
    {
      id: 89,
      question:
        "He is (A. worried about, B. fascinated by, C. tired of) the upcoming exams.",
      answer: ["B"],
    },
    {
      id: 90,
      question:
        "They were (A. excited about, B. proud of, C. afraid of) the award ceremony.",
      answer: ["C"],
    },
    {
      id: 91,
      question:
        "She is (A. pleased with, B. fascinated by, C. jealous of) her performance.",
      answer: ["B"],
    },
    {
      id: 92,
      question:
        "He is (A. responsible for, B. interested in, C. afraid of) organizing the conference.",
      answer: ["C"],
    },
    {
      id: 93,
      question:
        "The audience was (A. fascinated by, B. tired of, C. worried about) the final act.",
      answer: ["A"],
    },
    {
      id: 94,
      question:
        "She is (A. afraid of, B. pleased with, C. excited about) the dark alley.",
      answer: ["B"],
    },
    {
      id: 95,
      question:
        "He is (A. proud of, B. fascinated by, C. tired of) his students’ progress.",
      answer: ["C"],
    },
    {
      id: 96,
      question:
        "They were (A. tired of, B. interested in, C. excited about) waiting for the bus.",
      answer: ["B"],
    },
    {
      id: 97,
      question:
        "She is (A. pleased with, B. fascinated by, C. afraid of) her team’s success.",
      answer: ["C"],
    },
    {
      id: 98,
      question:
        "He is (A. good at, B. jealous of, C. fascinated by) solving riddles.",
      answer: ["B"],
    },
    {
      id: 99,
      question:
        "The teacher was (A. satisfied with, B. fascinated by, C. afraid of) the class participation.",
      answer: ["C"],
    },
    {
      id: 100,
      question:
        "She is (A. fascinated by, B. responsible for, C. afraid of) the new culture she’s exploring.",
      answer: ["A"],
    },
  ],
  "Colour idioms": [
    {
      id: 1,
      question:
        "Moe Moe is (A. out of the red, B. green with envy, C. in the red) over Sandra's new shoes.",
      answer: ["B"],
    },
    {
      id: 2,
      question:
        "The company is (A. tickled pink, B. in the red, C. white as a sheet) after the financial loss.",
      answer: ["B"],
    },
    {
      id: 3,
      question:
        "He turned (A. in the red, B. white as a sheet, C. green with envy) when he saw his rival’s success.",
      answer: ["C"],
    },
    {
      id: 4,
      question:
        "After hearing the shocking news, she went (A. green with envy, B. tickled pink, C. white as a sheet).",
      answer: ["C"],
    },
    {
      id: 5,
      question:
        "They were (A. tickled pink, B. out of the red, C. in the red) about winning the lottery.",
      answer: ["A"],
    },
    {
      id: 6,
      question:
        "He felt (A. in the red, B. green with envy, C. white as a sheet) when his friend got the promotion.",
      answer: ["B"],
    },
    {
      id: 7,
      question:
        "The restaurant went (A. tickled pink, B. out of the red, C. in the red) after the pandemic.",
      answer: ["C"],
    },
    {
      id: 8,
      question:
        "She was (A. green with envy, B. tickled pink, C. white as a sheet) when her book got published.",
      answer: ["B"],
    },
    {
      id: 9,
      question:
        "He looked (A. tickled pink, B. in the red, C. white as a sheet) when he heard the terrifying news.",
      answer: ["C"],
    },
    {
      id: 10,
      question:
        "The young artist was (A. in the red, B. green with envy, C. tickled pink) at seeing her friend’s artwork appreciated.",
      answer: ["B"],
    },
    {
      id: 11,
      question:
        "Although she had studied hard, she was (A. green with envy, B. tickled pink, C. white as a sheet) when her friend got the award.",
      answer: ["B"],
    },
    {
      id: 12,
      question:
        "Walking into the empty room, he turned (A. white as a sheet, B. green with envy, C. tickled pink) at the unexpected mess.",
      answer: ["C"],
    },
    {
      id: 13,
      question:
        "They were (A. out of the red, B. tickled pink, C. green with envy) once the project was finally approved.",
      answer: ["A"],
    },
    {
      id: 14,
      question:
        "She whispered to herself, feeling (A. green with envy, B. white as a sheet, C. tickled pink) about her colleague’s success.",
      answer: ["C"],
    },
    {
      id: 15,
      question:
        "After the long hike, he looked (A. tickled pink, B. out of the red, C. white as a sheet) at the breathtaking view.",
      answer: ["B"],
    },
    {
      id: 16,
      question:
        "The student, having heard the results, was (A. green with envy, B. tickled pink, C. white as a sheet) of his rival’s high score.",
      answer: ["C"],
    },
    {
      id: 17,
      question:
        "Even though she was exhausted, she felt (A. tickled pink, B. out of the red, C. green with envy) after helping the children.",
      answer: ["B"],
    },
    {
      id: 18,
      question:
        "He turned (A. white as a sheet, B. tickled pink, C. green with envy) when the unexpected guest arrived.",
      answer: ["C"],
    },
    {
      id: 19,
      question:
        "Seeing her sister’s new dress, she went (A. green with envy, B. tickled pink, C. white as a sheet).",
      answer: ["A"],
    },
    {
      id: 20,
      question:
        "Once the debts were cleared, the company was (A. tickled pink, B. out of the red, C. green with envy).",
      answer: ["C"],
    },
    {
      id: 21,
      question:
        "The little boy was (A. tickled pink, B. white as a sheet, C. green with envy) when he saw the puppy in the shop window.",
      answer: ["B"],
    },
    {
      id: 22,
      question:
        "He looked (A. green with envy, B. tickled pink, C. out of the red) after learning his neighbor bought a new car.",
      answer: ["C"],
    },
    {
      id: 23,
      question:
        "She felt (A. tickled pink, B. white as a sheet, C. green with envy) on her birthday when everyone sang for her.",
      answer: ["A"],
    },
    {
      id: 24,
      question:
        "After receiving the shocking news, he turned (A. white as a sheet, B. green with envy, C. tickled pink).",
      answer: ["B"],
    },
    {
      id: 25,
      question:
        "Watching her colleague get promoted, she was (A. green with envy, B. tickled pink, C. out of the red).",
      answer: ["C"],
    },
    {
      id: 26,
      question:
        "The chef was (A. tickled pink, B. green with envy, C. white as a sheet) at seeing his dish featured in the magazine.",
      answer: ["B"],
    },
    {
      id: 27,
      question:
        "Despite the storm, the sailors were (A. out of the red, B. tickled pink, C. green with envy) when they docked safely.",
      answer: ["A"],
    },
    {
      id: 28,
      question:
        "He felt (A. white as a sheet, B. green with envy, C. tickled pink) after watching the horror movie.",
      answer: ["C"],
    },
    {
      id: 29,
      question:
        "Seeing the lottery results, she went (A. tickled pink, B. out of the red, C. green with envy).",
      answer: ["B"],
    },
    {
      id: 30,
      question:
        "The students were (A. green with envy, B. tickled pink, C. white as a sheet) when the top scorer received a trophy.",
      answer: ["C"],
    },
    {
      id: 31,
      question:
        "Having just won the competition, he was (A. tickled pink, B. green with envy, C. out of the red).",
      answer: ["B"],
    },
    {
      id: 32,
      question:
        "She turned (A. white as a sheet, B. tickled pink, C. green with envy) when the glass slipped from her hands.",
      answer: ["C"],
    },
    {
      id: 33,
      question:
        "The couple felt (A. tickled pink, B. out of the red, C. green with envy) after receiving their wedding invitations.",
      answer: ["A"],
    },
    {
      id: 34,
      question:
        "Walking through the gallery, he looked (A. green with envy, B. tickled pink, C. white as a sheet) at the art pieces.",
      answer: ["B"],
    },
    {
      id: 35,
      question:
        "Despite losing the match, the team was (A. out of the red, B. tickled pink, C. green with envy) because of their improvement.",
      answer: ["C"],
    },
    {
      id: 36,
      question:
        "He went (A. tickled pink, B. white as a sheet, C. green with envy) after hearing he had passed the exam.",
      answer: ["B"],
    },
    {
      id: 37,
      question:
        "Seeing the promotion announcement, she was (A. green with envy, B. tickled pink, C. out of the red).",
      answer: ["C"],
    },
    {
      id: 38,
      question:
        "The audience turned (A. white as a sheet, B. tickled pink, C. green with envy) when the lights went out suddenly.",
      answer: ["B"],
    },
    {
      id: 39,
      question:
        "After finishing the marathon, he was (A. tickled pink, B. out of the red, C. green with envy).",
      answer: ["C"],
    },
    {
      id: 40,
      question:
        "He felt (A. green with envy, B. tickled pink, C. white as a sheet) seeing his rival’s success.",
      answer: ["B"],
    },
    {
      id: 41,
      question:
        "She was (A. tickled pink, B. white as a sheet, C. green with envy) when her artwork got displayed.",
      answer: ["C"],
    },
    {
      id: 42,
      question:
        "The children, having seen the magician, went (A. tickled pink, B. green with envy, C. out of the red).",
      answer: ["B"],
    },
    {
      id: 43,
      question:
        "He turned (A. white as a sheet, B. tickled pink, C. green with envy) when the earthquake alarm rang.",
      answer: ["C"],
    },
    {
      id: 44,
      question:
        "Despite the difficulties, she was (A. tickled pink, B. out of the red, C. green with envy) about completing the project.",
      answer: ["B"],
    },
    {
      id: 45,
      question:
        "Seeing the first prize, he felt (A. green with envy, B. tickled pink, C. white as a sheet).",
      answer: ["C"],
    },
    {
      id: 46,
      question:
        "After receiving the gift, she was (A. tickled pink, B. green with envy, C. out of the red).",
      answer: ["B"],
    },
    {
      id: 47,
      question:
        "He turned (A. white as a sheet, B. tickled pink, C. green with envy) at the sudden loud noise.",
      answer: ["B"],
    },
    {
      id: 48,
      question:
        "The audience was (A. tickled pink, B. out of the red, C. green with envy) after the amazing performance.",
      answer: ["C"],
    },
    {
      id: 49,
      question:
        "She felt (A. green with envy, B. tickled pink, C. white as a sheet) when her friend received a promotion.",
      answer: ["B"],
    },
    {
      id: 50,
      question:
        "Having completed the project successfully, he was (A. tickled pink, B. green with envy, C. out of the red).",
      answer: ["C"],
    },
  ],
  "Subordinating conjunctions in adverbial clauses": [
    {
      id: 1,
      question:
        "We had to stand all the way. All the seats on the bus were occupied.",
      answer: [
        "We had to stand all the way because all the seats on the bus were occupied.",
        "We had to stand all the way as all the seats on the bus were occupied.",
        "We had to stand all the way since all the seats on the bus were occupied.",
      ],
    },
    {
      id: 2,
      question: "She left the house. The rain started pouring.",
      answer: [
        "She left the house just as the rain started pouring.",
        "She left the house when the rain started pouring.",
        "She left the house after the rain started pouring.",
      ],
    },
    {
      id: 3,
      question: "He completed the report. He wanted to impress his boss.",
      answer: [
        "He completed the report so that he could impress his boss.",
        "He completed the report in order that he could impress his boss.",
      ],
    },
    {
      id: 4,
      question: "I will bring an umbrella. It rains tomorrow.",
      answer: [
        "I will bring an umbrella if it rains tomorrow.",
        "I will bring an umbrella in case it rains tomorrow.",
      ],
    },
    {
      id: 5,
      question: "She talks softly. She wants everyone to feel comfortable.",
      answer: [
        "She talks softly so that everyone can feel comfortable.",
        "She talks softly in order that everyone can feel comfortable.",
      ],
    },
    {
      id: 6,
      question: "He studied hard. He didn’t want to fail the exam.",
      answer: [
        "He studied hard because he didn’t want to fail the exam.",
        "He studied hard as he didn’t want to fail the exam.",
        "He studied hard since he didn’t want to fail the exam.",
      ],
    },
    {
      id: 7,
      question: "I enjoy living in this city. I was born here.",
      answer: [
        "I enjoy living in this city because I was born here.",
        "I enjoy living in this city since I was born here.",
      ],
    },
    {
      id: 8,
      question: "She left early. Her friends were still at the party.",
      answer: [
        "She left early although her friends were still at the party.",
        "She left early even though her friends were still at the party.",
        "She left early though her friends were still at the party.",
      ],
    },
    {
      id: 9,
      question: "He ran faster than anyone else in the race.",
      answer: [
        "He ran as fast as anyone else in the race.",
        "He ran faster than anyone else because he was well trained.",
      ],
    },
    {
      id: 10,
      question: "The dog barked loudly. The thief tried to escape.",
      answer: [
        "The dog barked so loudly that the thief tried to escape.",
        "The dog barked in such a way that the thief tried to escape.",
      ],
    },
    {
      id: 11,
      question: "She returned the book. She had borrowed it last week.",
      answer: [
        "She returned the book after she had borrowed it last week.",
        "She returned the book once she had borrowed it last week.",
      ],
    },
    {
      id: 12,
      question: "He looked everywhere. His keys were nowhere to be found.",
      answer: [
        "He looked everywhere where his keys might be.",
        "He looked around the place where his keys might be.",
      ],
    },
    {
      id: 13,
      question: "I will attend the meeting. I finish my work on time.",
      answer: [
        "I will attend the meeting provided that I finish my work on time.",
        "I will attend the meeting as long as I finish my work on time.",
      ],
    },
    {
      id: 14,
      question: "She was very tired. She continued to work.",
      answer: [
        "She continued to work although she was very tired.",
        "She continued to work even though she was very tired.",
      ],
    },
    {
      id: 15,
      question: "We stayed indoors. It was too hot outside.",
      answer: [
        "We stayed indoors because it was too hot outside.",
        "We stayed indoors since it was too hot outside.",
      ],
    },
    {
      id: 16,
      question: "He hid the gift. His sister was in the room.",
      answer: [
        "He hid the gift while his sister was in the room.",
        "He hid the gift as his sister was in the room.",
      ],
    },
    {
      id: 17,
      question: "I spoke slowly. My friend couldn’t understand me.",
      answer: [
        "I spoke slowly so that my friend could understand me.",
        "I spoke slowly in order that my friend could understand me.",
      ],
    },
    {
      id: 18,
      question: "He missed the train. He woke up late.",
      answer: [
        "He missed the train because he woke up late.",
        "He missed the train as he woke up late.",
      ],
    },
    {
      id: 19,
      question: "The children played outside. It stopped raining.",
      answer: [
        "The children played outside after it stopped raining.",
        "The children played outside once it stopped raining.",
      ],
    },
    {
      id: 20,
      question: "She didn’t answer the phone. She was busy.",
      answer: [
        "She didn’t answer the phone because she was busy.",
        "She didn’t answer the phone as she was busy.",
        "She didn’t answer the phone since she was busy.",
      ],
    },
    {
      id: 21,
      question: "He took an umbrella. It looked like it was going to rain.",
      answer: [
        "He took an umbrella because it looked like it was going to rain.",
        "He took an umbrella as it looked like it was going to rain.",
        "He took an umbrella since it looked like it was going to rain.",
      ],
    },
    {
      id: 22,
      question: "She stayed calm. Everyone around her was panicking.",
      answer: [
        "She stayed calm although everyone around her was panicking.",
        "She stayed calm even though everyone around her was panicking.",
        "She stayed calm though everyone around her was panicking.",
      ],
    },
    {
      id: 23,
      question: "I will join the online class. I finish my work on time.",
      answer: [
        "I will join the online class provided that I finish my work on time.",
        "I will join the online class as long as I finish my work on time.",
      ],
    },
    {
      id: 24,
      question: "He trained hard. He wanted to win the competition.",
      answer: [
        "He trained hard so that he could win the competition.",
        "He trained hard in order that he could win the competition.",
      ],
    },
    {
      id: 25,
      question: "The cat hid under the bed. The dog was barking loudly.",
      answer: [
        "The cat hid under the bed while the dog was barking loudly.",
        "The cat hid under the bed as the dog was barking loudly.",
      ],
    },
    {
      id: 26,
      question: "I was late to the party. I missed the opening speech.",
      answer: [
        "I was late to the party because I missed the opening speech.",
        "I was late to the party as I missed the opening speech.",
        "I was late to the party since I missed the opening speech.",
      ],
    },
    {
      id: 27,
      question: "She took notes. She wanted to remember everything.",
      answer: [
        "She took notes so that she could remember everything.",
        "She took notes in order that she could remember everything.",
      ],
    },
    {
      id: 28,
      question: "He works faster than anyone else in the office.",
      answer: [
        "He works as fast as anyone else in the office.",
        "He works faster than anyone else because he is well trained.",
      ],
    },
    {
      id: 29,
      question: "I didn’t call you. I lost my phone.",
      answer: [
        "I didn’t call you because I lost my phone.",
        "I didn’t call you as I lost my phone.",
        "I didn’t call you since I lost my phone.",
      ],
    },
    {
      id: 30,
      question: "The students went home. The school bell rang.",
      answer: [
        "The students went home when the school bell rang.",
        "The students went home after the school bell rang.",
        "The students went home as soon as the school bell rang.",
      ],
    },
    {
      id: 31,
      question: "He missed the meeting. He overslept.",
      answer: [
        "He missed the meeting because he overslept.",
        "He missed the meeting as he overslept.",
        "He missed the meeting since he overslept.",
      ],
    },
    {
      id: 32,
      question: "She whispered. She didn’t want to wake the baby.",
      answer: [
        "She whispered so that she wouldn’t wake the baby.",
        "She whispered in order that she wouldn’t wake the baby.",
      ],
    },
    {
      id: 33,
      question: "We can leave early. The project is finished.",
      answer: [
        "We can leave early since the project is finished.",
        "We can leave early because the project is finished.",
        "We can leave early as the project is finished.",
      ],
    },
    {
      id: 34,
      question: "He stayed calm. The situation was very stressful.",
      answer: [
        "He stayed calm although the situation was very stressful.",
        "He stayed calm even though the situation was very stressful.",
        "He stayed calm though the situation was very stressful.",
      ],
    },
    {
      id: 35,
      question: "I will lend you my notes. You promise to return them.",
      answer: [
        "I will lend you my notes provided that you promise to return them.",
        "I will lend you my notes as long as you promise to return them.",
      ],
    },
    {
      id: 36,
      question: "She closed the window. It was very windy.",
      answer: [
        "She closed the window because it was very windy.",
        "She closed the window as it was very windy.",
        "She closed the window since it was very windy.",
      ],
    },
    {
      id: 37,
      question: "He ran fast. He wanted to catch the bus.",
      answer: [
        "He ran fast so that he could catch the bus.",
        "He ran fast in order that he could catch the bus.",
      ],
    },
    {
      id: 38,
      question: "The boy kept quiet. His teacher was speaking.",
      answer: [
        "The boy kept quiet while his teacher was speaking.",
        "The boy kept quiet as his teacher was speaking.",
      ],
    },
    {
      id: 39,
      question: "She didn’t attend the meeting. She was unwell.",
      answer: [
        "She didn’t attend the meeting because she was unwell.",
        "She didn’t attend the meeting as she was unwell.",
        "She didn’t attend the meeting since she was unwell.",
      ],
    },
    {
      id: 40,
      question: "He was shocked. He heard the unexpected news.",
      answer: [
        "He was shocked when he heard the unexpected news.",
        "He was shocked after he heard the unexpected news.",
        "He was shocked as soon as he heard the unexpected news.",
      ],
    },
    {
      id: 41,
      question: "The children ran outside. It stopped raining.",
      answer: [
        "The children ran outside after it stopped raining.",
        "The children ran outside once it stopped raining.",
      ],
    },
    {
      id: 42,
      question: "She couldn’t join the team. She was injured.",
      answer: [
        "She couldn’t join the team because she was injured.",
        "She couldn’t join the team as she was injured.",
        "She couldn’t join the team since she was injured.",
      ],
    },
    {
      id: 43,
      question: "He worked hard. He wanted to succeed.",
      answer: [
        "He worked hard so that he could succeed.",
        "He worked hard in order that he could succeed.",
      ],
    },
    {
      id: 44,
      question: "I waited for him. He was late.",
      answer: [
        "I waited for him because he was late.",
        "I waited for him as he was late.",
        "I waited for him since he was late.",
      ],
    },
    {
      id: 45,
      question: "She smiled. He told a funny story.",
      answer: [
        "She smiled when he told a funny story.",
        "She smiled as he told a funny story.",
        "She smiled while he told a funny story.",
      ],
    },
    {
      id: 46,
      question: "He missed the bus. He woke up late.",
      answer: [
        "He missed the bus because he woke up late.",
        "He missed the bus as he woke up late.",
        "He missed the bus since he woke up late.",
      ],
    },
    {
      id: 47,
      question: "I will help you. You promise to complete the work.",
      answer: [
        "I will help you provided that you promise to complete the work.",
        "I will help you as long as you promise to complete the work.",
        "I will help if you promise to complete the work.",
      ],
    },
    {
      id: 48,
      question: "She wore sunglasses. The sun was bright.",
      answer: [
        "She wore sunglasses because the sun was bright.",
        "She wore sunglasses as the sun was bright.",
        "She wore sunglasses since the sun was bright.",
      ],
    },
    {
      id: 49,
      question: "He whispered. The baby was sleeping.",
      answer: [
        "He whispered so that the baby wouldn’t wake up.",
        "He whispered in order that the baby wouldn’t wake up.",
      ],
    },
    {
      id: 50,
      question: "We stayed home. It was raining heavily.",
      answer: [
        "We stayed home because it was raining heavily.",
        "We stayed home as it was raining heavily.",
        "We stayed home since it was raining heavily.",
      ],
    },
    {
      id: 51,
      question: "He apologized. She was upset with him.",
      answer: [
        "He apologized because she was upset with him.",
        "He apologized as she was upset with him.",
        "He apologized since she was upset with him.",
      ],
    },
    {
      id: 52,
      question: "She stayed home. The weather was too cold.",
      answer: [
        "She stayed home because the weather was too cold.",
        "She stayed home as the weather was too cold.",
        "She stayed home since the weather was too cold.",
      ],
    },
    {
      id: 53,
      question: "He continued to speak. Everyone was listening attentively.",
      answer: [
        "He continued to speak while everyone was listening attentively.",
        "He continued to speak as everyone was listening attentively.",
      ],
    },
    {
      id: 54,
      question: "I will attend the seminar. I finish my report on time.",
      answer: [
        "I will attend the seminar provided that I finish my report on time.",
        "I will attend the seminar as long as I finish my report on time.",
      ],
    },
    {
      id: 55,
      question: "The teacher praised him. He answered all questions correctly.",
      answer: [
        "The teacher praised him because he answered all questions correctly.",
        "The teacher praised him as he answered all questions correctly.",
        "The teacher praised him since he answered all questions correctly.",
      ],
    },
    {
      id: 56,
      question: "She wore a coat. It was snowing outside.",
      answer: [
        "She wore a coat because it was snowing outside.",
        "She wore a coat as it was snowing outside.",
        "She wore a coat since it was snowing outside.",
      ],
    },
    {
      id: 57,
      question: "He studied diligently. He wanted to secure a scholarship.",
      answer: [
        "He studied diligently so that he could secure a scholarship.",
        "He studied diligently in order that he could secure a scholarship.",
      ],
    },
    {
      id: 58,
      question: "The children played in the park. Their parents watched them.",
      answer: [
        "The children played in the park while their parents watched them.",
        "The children played in the park as their parents watched them.",
      ],
    },
    {
      id: 59,
      question: "She didn’t go out. She felt unwell.",
      answer: [
        "She didn’t go out because she felt unwell.",
        "She didn’t go out as she felt unwell.",
        "She didn’t go out since she felt unwell.",
      ],
    },
    {
      id: 60,
      question: "He left the room. He had completed his task.",
      answer: [
        "He left the room after he had completed his task.",
        "He left the room once he had completed his task.",
      ],
    },
    {
      id: 61,
      question:
        "The student improved her performance. She practiced every day.",
      answer: [
        "The student improved her performance because she practiced every day.",
        "The student improved her performance as she practiced every day.",
        "The student improved her performance since she practiced every day.",
      ],
    },
    {
      id: 62,
      question: "She spoke quietly. The baby was sleeping.",
      answer: [
        "She spoke quietly so that the baby wouldn’t wake up.",
        "She spoke quietly in order that the baby wouldn’t wake up.",
      ],
    },
    {
      id: 63,
      question: "He felt proud. His team won the championship.",
      answer: [
        "He felt proud because his team won the championship.",
        "He felt proud as his team won the championship.",
        "He felt proud since his team won the championship.",
      ],
    },
    {
      id: 64,
      question: "The plane took off. The weather was clear.",
      answer: [
        "The plane took off because the weather was clear.",
        "The plane took off as the weather was clear.",
        "The plane took off since the weather was clear.",
      ],
    },
    {
      id: 65,
      question: "She wore sunglasses. The sunlight was bright.",
      answer: [
        "She wore sunglasses because the sunlight was bright.",
        "She wore sunglasses as the sunlight was bright.",
        "She wore sunglasses since the sunlight was bright.",
      ],
    },
    {
      id: 66,
      question: "He waited outside. The store hadn’t opened yet.",
      answer: [
        "He waited outside because the store hadn’t opened yet.",
        "He waited outside as the store hadn’t opened yet.",
        "He waited outside since the store hadn’t opened yet.",
      ],
    },
    {
      id: 67,
      question: "She didn’t answer immediately. She was thinking carefully.",
      answer: [
        "She didn’t answer immediately because she was thinking carefully.",
        "She didn’t answer immediately as she was thinking carefully.",
        "She didn’t answer immediately since she was thinking carefully.",
      ],
    },
    {
      id: 68,
      question: "He felt exhausted. He had been jogging for hours.",
      answer: [
        "He felt exhausted because he had been jogging for hours.",
        "He felt exhausted as he had been jogging for hours.",
        "He felt exhausted since he had been jogging for hours.",
      ],
    },
    {
      id: 69,
      question:
        "They celebrated the festival. They had decorated the house beautifully.",
      answer: [
        "They celebrated the festival because they had decorated the house beautifully.",
        "They celebrated the festival as they had decorated the house beautifully.",
        "They celebrated the festival since they had decorated the house beautifully.",
      ],
    },
    {
      id: 70,
      question: "She kept working. She was tired.",
      answer: [
        "She kept working although she was tired.",
        "She kept working even though she was tired.",
        "She kept working though she was tired.",
      ],
    },
    {
      id: 71,
      question: "He bought the tickets. He wanted to attend the concert.",
      answer: [
        "He bought the tickets so that he could attend the concert.",
        "He bought the tickets in order that he could attend the concert.",
      ],
    },
    {
      id: 72,
      question: "The dog barked. The stranger approached the house.",
      answer: [
        "The dog barked when the stranger approached the house.",
        "The dog barked as the stranger approached the house.",
        "The dog barked while the stranger approached the house.",
      ],
    },
    {
      id: 73,
      question: "I won’t join the picnic. I finish my assignments.",
      answer: [
        "I won’t join the picnic unless I finish my assignments.",
        "I won’t join the picnic provided that I don’t finish my assignments.",
        "I won’t join the picnic if I don’t finish my assignments.",
      ],
    },
    {
      id: 74,
      question: "She felt happy. Her friends organized a surprise party.",
      answer: [
        "She felt happy because her friends organized a surprise party.",
        "She felt happy as her friends organized a surprise party.",
        "She felt happy since her friends organized a surprise party.",
      ],
    },
    {
      id: 75,
      question: "He left immediately. The meeting was over.",
      answer: [
        "He left immediately after the meeting was over.",
        "He left immediately once the meeting was over.",
      ],
    },
    {
      id: 76,
      question: "She avoided the main road. There was heavy traffic.",
      answer: [
        "She avoided the main road because there was heavy traffic.",
        "She avoided the main road as there was heavy traffic.",
        "She avoided the main road since there was heavy traffic.",
      ],
    },
    {
      id: 77,
      question:
        "He trained every day. He wanted to participate in the marathon.",
      answer: [
        "He trained every day so that he could participate in the marathon.",
        "He trained every day in order that he could participate in the marathon.",
      ],
    },
    {
      id: 78,
      question: "The child hid. The thunder scared him.",
      answer: [
        "The child hid because the thunder scared him.",
        "The child hid as the thunder scared him.",
        "The child hid since the thunder scared him.",
      ],
    },
    {
      id: 79,
      question: "She finished her work quickly. She wanted to go out.",
      answer: [
        "She finished her work quickly so that she could go out.",
        "She finished her work quickly in order that she could go out.",
      ],
    },
    {
      id: 80,
      question: "He kept calm. The situation was dangerous.",
      answer: [
        "He kept calm although the situation was dangerous.",
        "He kept calm even though the situation was dangerous.",
        "He kept calm though the situation was dangerous.",
      ],
    },
    {
      id: 81,
      question: "He stayed silent. He didn’t want to upset anyone.",
      answer: [
        "He stayed silent so that he wouldn’t upset anyone.",
        "He stayed silent in order that he wouldn’t upset anyone.",
      ],
    },
    {
      id: 82,
      question: "She smiled. She remembered a happy moment.",
      answer: [
        "She smiled when she remembered a happy moment.",
        "She smiled as she remembered a happy moment.",
        "She smiled while she remembered a happy moment.",
      ],
    },
    {
      id: 83,
      question: "The meeting was postponed. The manager was busy.",
      answer: [
        "The meeting was postponed because the manager was busy.",
        "The meeting was postponed as the manager was busy.",
        "The meeting was postponed since the manager was busy.",
      ],
    },
    {
      id: 84,
      question: "I will help you. You promise to do your best.",
      answer: [
        "I will help you provided that you promise to do your best.",
        "I will help you as long as you promise to do your best.",
      ],
    },
    {
      id: 85,
      question: "He didn’t react. He was shocked by the news.",
      answer: [
        "He didn’t react because he was shocked by the news.",
        "He didn’t react as he was shocked by the news.",
        "He didn’t react since he was shocked by the news.",
      ],
    },
    {
      id: 86,
      question: "She left the room. The lecture had ended.",
      answer: [
        "She left the room after the lecture had ended.",
        "She left the room once the lecture had ended.",
      ],
    },
    {
      id: 87,
      question: "He kept running. He wanted to finish before sunset.",
      answer: [
        "He kept running so that he could finish before sunset.",
        "He kept running in order that he could finish before sunset.",
      ],
    },
    {
      id: 88,
      question: "The students were quiet. The principal was speaking.",
      answer: [
        "The students were quiet while the principal was speaking.",
        "The students were quiet as the principal was speaking.",
      ],
    },
    {
      id: 89,
      question: "She was nervous. She had never performed on stage before.",
      answer: [
        "She was nervous because she had never performed on stage before.",
        "She was nervous as she had never performed on stage before.",
        "She was nervous since she had never performed on stage before.",
      ],
    },
    {
      id: 90,
      question: "He did the work efficiently. He wanted to impress his boss.",
      answer: [
        "He did the work efficiently so that he could impress his boss.",
        "He did the work efficiently in order that he could impress his boss.",
      ],
    },
    {
      id: 91,
      question: "She stayed calm. Everyone was panicking.",
      answer: [
        "She stayed calm although everyone was panicking.",
        "She stayed calm even though everyone was panicking.",
        "She stayed calm though everyone was panicking.",
      ],
    },
    {
      id: 92,
      question: "I will go shopping. I finish my homework.",
      answer: [
        "I will go shopping provided that I finish my homework.",
        "I will go shopping as long as I finish my homework.",
      ],
    },
    {
      id: 93,
      question: "He went to the doctor. He felt very ill.",
      answer: [
        "He went to the doctor because he felt very ill.",
        "He went to the doctor as he felt very ill.",
        "He went to the doctor since he felt very ill.",
      ],
    },
    {
      id: 94,
      question: "She closed the door. The wind was strong.",
      answer: [
        "She closed the door because the wind was strong.",
        "She closed the door as the wind was strong.",
        "She closed the door since the wind was strong.",
      ],
    },
    {
      id: 95,
      question: "He whispered. The baby was sleeping.",
      answer: [
        "He whispered so that the baby wouldn’t wake up.",
        "He whispered in order that the baby wouldn’t wake up.",
      ],
    },
    {
      id: 96,
      question: "She packed her bag. She was leaving for the trip.",
      answer: [
        "She packed her bag because she was leaving for the trip.",
        "She packed her bag as she was leaving for the trip.",
        "She packed her bag since she was leaving for the trip.",
      ],
    },
    {
      id: 97,
      question: "He couldn’t attend the meeting. He had a prior engagement.",
      answer: [
        "He couldn’t attend the meeting because he had a prior engagement.",
        "He couldn’t attend the meeting as he had a prior engagement.",
        "He couldn’t attend the meeting since he had a prior engagement.",
      ],
    },
    {
      id: 98,
      question: "They cheered. Their team scored a goal.",
      answer: [
        "They cheered when their team scored a goal.",
        "They cheered as their team scored a goal.",
        "They cheered while their team scored a goal.",
      ],
    },
    {
      id: 99,
      question: "She felt relieved. The exam was over.",
      answer: [
        "She felt relieved because the exam was over.",
        "She felt relieved as the exam was over.",
        "She felt relieved since the exam was over.",
      ],
    },
    {
      id: 100,
      question: "He finished the race. He was exhausted.",
      answer: [
        "He finished the race although he was exhausted.",
        "He finished the race even though he was exhausted.",
        "He finished the race though he was exhausted.",
      ],
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
