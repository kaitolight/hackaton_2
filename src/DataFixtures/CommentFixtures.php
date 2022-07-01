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
        ['message' => 'Passionnant! Bravo pour ce beau projet!', 
        'project' => 'project_La conception UX pour application desktop',],
        ['message' => 'Un sujet passionnant, on a envie d\'y contribuer', 
        'project' => 'project_Task Force de traitement de masse pour S2E',],
        ['message' => 'Quel beau projet! Bravo à toute votre équipe!', 
        'project' => 'project_Transformation d’un centre de préparation pour Système U',],
        ['message' => 'Bravo à toute votre équipe! Quel beau projet!', 
        'project' => 'project_Le conseil et l’expertise dans le domaine des tests et de la qualité logicielle',],

        ['message' => 'Quel beau projet! Bravo à toute votre équipe!', 
        'project' => 'project_Conseil en organisation dans l\'assurance',],
        ['message' => 'Un sujet passionnant, on a envie d\'y contribuer', 
        'project' => 'project_La conception UX pour application desktop',],
        ['message' => 'Passionnant! Bravo pour ce beau projet!', 
        'project' => 'project_Task Force de traitement de masse pour S2E',],
        ['message' => 'Super! Nous allons prochainement réaliser un projet similaire pour l\'un de nos clients', 
        'project' => 'project_Transformation d’un centre de préparation pour Système U',],
        ['message' => 'Un sujet passionnant, on a envie d\'y contribuer', 
        'project' => 'project_Le conseil et l’expertise dans le domaine des tests et de la qualité logicielle',],
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
