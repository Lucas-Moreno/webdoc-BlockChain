<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ReponsesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ReponsesRepository::class)
 */
class Reponses
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $reponse1;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $reponse2;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $reponse3;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $reponse4;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReponse1(): ?string
    {
        return $this->reponse1;
    }

    public function setReponse1(string $reponse1): self
    {
        $this->reponse1 = $reponse1;

        return $this;
    }

    public function getReponse2(): ?string
    {
        return $this->reponse2;
    }

    public function setReponse2(string $reponse2): self
    {
        $this->reponse2 = $reponse2;

        return $this;
    }

    public function getReponse3(): ?string
    {
        return $this->reponse3;
    }

    public function setReponse3(string $reponse3): self
    {
        $this->reponse3 = $reponse3;

        return $this;
    }

    public function getReponse4(): ?string
    {
        return $this->reponse4;
    }

    public function setReponse4(string $reponse4): self
    {
        $this->reponse4 = $reponse4;

        return $this;
    }
}
