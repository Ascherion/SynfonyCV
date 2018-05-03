<?php

namespace App\Controller;

use App\Entity\Cursus;
use App\Entity\Diplomes;
use App\Entity\Skill;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AccueilController extends Controller
{
    /**
     * @Route("/", name="accueil")
     */
    public function index()
    {
        $repo_skill = $this->getDoctrine()->getRepository(Skill::class);
        $skill = $repo_skill->findAll();
        $repo_cursus = $this->getDoctrine()->getRepository(Cursus::class);
        $cursus = $repo_cursus->findAll();
        $repo_diplomes = $this->getDoctrine()->getRepository(Diplomes::class);
        $diplomes = $repo_diplomes->findAll();


        return $this->render('accueil/index.html.twig', [
            'skill' => $skill, 'cursus' => $cursus, 'diplomes' => $diplomes
        ]);
    }
}
