import Info from "@/src/layouts/Info";
import Jumbotron from "@/src/layouts/Jumbotron";
import Proyects from "@/src/layouts/Proyects";
import Skill from "@/src/layouts/Skill";

export default function Home() {
    return (
        <main>
            <Jumbotron />
            <Info />
            <Skill />
            <Proyects />
        </main>
    );
}
