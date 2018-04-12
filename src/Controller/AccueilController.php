<?php

namespace App\Controller;

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
        $skill=$repo_skill->findAll();
        return $this->render('accueil/index.html.twig', [
            'skill' => $skill
        ]);
    }
}
