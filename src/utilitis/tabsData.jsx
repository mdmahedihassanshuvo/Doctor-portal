import Cavity from "../components/Pages/Cavity/Cavity";
import Cleaning from "../components/Pages/Cleaning/Cleaning";
import Cosmetic from "../components/Pages/Cosmetic/Cosmetic";
import Oral from "../components/Pages/Oral/Oral";
import Pediatric from "../components/Pages/Pediatric/Pediatric";
import Teeth from "../components/Pages/Teeth/Teeth";

const tabData = [
    {
        label: 'Teeth Orthodontics',
        content: <Teeth></Teeth>
    },
    {
        label: 'Cosmetic Dentistry',
        content: <Cosmetic></Cosmetic>
    },
    {
        label: 'Teeth Cleaning',
        content: <Cleaning></Cleaning>
    },
    {
        label: 'Cavity Protection',
        content: <Cavity></Cavity>
    },
    {
        label: 'Pediatric Dental',
        content: <Pediatric></Pediatric>
    },
    {
        label: 'Oral Surgery',
        content: <Oral></Oral>
    }

]

export default tabData;