<?php

namespace App\DataFixtures;

use App\Entity\Comment;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class CommentFixtures extends Fixture implements DependentFixtureInterface
{
    public const COMMENTS = [
        ['message' => 'Super! Nous allons prochainement réaliser un projet similaire pour l\'un de nos clients', 
        'project' => 'project_Conseil en organisation dans l\'assurance',],
        ['message' => 'Super! Nous allons prochainement réaliser un projet similaire pour l\'un de nos clients', 
        'project' => 'project_Conseil en organisation dans l\'assurance',],
        ['message' => 'Super! Nous allons prochainement réaliser un projet similaire pour l\'un de nos clients', 
        'project' => 'project_Conseil en organisation dans l\'assurance',],
        ['message' => 'Super! Nous allons prochainement réaliser un projet similaire pour l\'un de nos clients', 
        'project' => 'project_Conseil en organisation dans l\'assurance',],

    ];

    public function load(ObjectManager $manager): void
    {
        foreach (self::COMMENTS as $commentName) {
            $comment = new Comment();
            $comment->setMessage($commentName['message']);
            $comment->setProject($this->getReference($commentName['project']));
            $manager->persist($comment);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        // Tu retournes ici toutes les classes de fixtures dont ProgramFixtures dépend
        return [
        ProjectFixtures::class
        ];
    }
}
