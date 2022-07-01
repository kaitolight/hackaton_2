<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
#[ApiResource(
    formats: ['json'],
    normalizationContext: ['groups' => 'read:project']
)]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read:project', 'get:user'])]
    private $id;

    #[ORM\Column(type: 'string', length: 155)]
    #[Groups(['read:project', 'get:user'])]
    private $name;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['read:project', 'get:user'])]
    private $description;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['read:project', 'get:user'])]
    private $createdAt;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private $endedAt;

    #[ORM\Column(type: 'integer', nullable: true)]
    #[Groups(['read:project', 'get:user'])]
    private $status;

    #[ORM\ManyToOne(targetEntity: Category::class, inversedBy: 'projects')]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(['read:project', 'get:user'])]
    private $category;

    #[ORM\ManyToOne(targetEntity: Agency::class, inversedBy: 'projects')]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(['read:project', 'get:user'])]
    private $agency;

    #[ORM\OneToMany(mappedBy: 'project', targetEntity: Comment::class)]
    private $comments;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'projects')]
    #[Groups(['read:project'])]
    private $user;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getEndedAt(): ?\DateTimeInterface
    {
        return $this->endedAt;
    }

    public function setEndedAt(?\DateTimeInterface $endedAt): self
    {
        $this->endedAt = $endedAt;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getAgency(): ?Agency
    {
        return $this->agency;
    }

    public function setAgency(?Agency $agency): self
    {
        $this->agency = $agency;

        return $this;
    }

    /**
     * @return Collection<int, Comment>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setProject($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getProject() === $this) {
                $comment->setProject(null);
            }
        }

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
