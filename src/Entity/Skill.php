<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SkillRepository")
 */
class Skill
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

   /**
    *
    * @ORM\Column(type="string", length=255)
    */
    private $nom;

   /**
    *
    * @ORM\Column(type="decimal")
    */
    private $niveau;


    function getNom() {
        return $this->nom;
    }

    function getNiveau() {
        return $this->niveau;
    }

    function setNom($nom) {
        $this->nom = $nom;
    }

    function setNiveau($niveau) {
        $this->niveau = $niveau;
    }
}
