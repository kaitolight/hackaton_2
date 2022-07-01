<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture implements DependentFixtureInterface
{
    /**
     * UserFixtures constructor.
     * @param UserPasswordHasherInterface $passwordHasher
     */
    public function __construct(private UserPasswordHasherInterface $passwordHasher)
    {
    }

    public function load(ObjectManager $manager): void
    {
        $admin = new User();
        $admin->setEmail('admin@upside.com');
        $admin->setFirstname('JF');
        $admin->setLastname('Nirom');
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setPosition('Tech lead');
        $admin->setPassword($this->passwordHasher->hashPassword($admin, 'password'));
        $admin->setAgency($this->getReference('agency_Bordeaux'));
        $this->addReference('user_' . 'JF' , $admin);
        //$this->addReference('user_1', $admin);
        //$this->addReference('user_' . $admin['user']);
        $manager->persist($admin);
        $manager->flush();

        $user = new User();
        $user->setEmail('user1@upside.com');
        $user->setFirstname('Antho');
        $user->setLastname('Iksrog');
        $user->setRoles(['ROLE_CONTRIBUTOR']);
        $user->setPosition('Lead Dev');
        $user->setPassword($this->passwordHasher->hashPassword($user, 'password'));
        $user->setAgency($this->getReference('agency_Nice'));
        $this->addReference('user_' . 'Antho' , $user);
        $manager->persist($user);
        $manager->flush();

        $user = new User();
        $user->setEmail('user2@upside.com');
        $user->setFirstname('Loris');
        $user->setLastname('Tenetsach');
        $user->setRoles(['ROLE_CONTRIBUTOR']);
        $user->setPosition('Lead Dev');
        $user->setPassword($this->passwordHasher->hashPassword($user, 'password'));
        $user->setAgency($this->getReference('agency_Paris'));
        $this->addReference('user_' . 'Loris' , $user);
        $manager->persist($user);
        $manager->flush();

        $user = new User();
        $user->setEmail('user3@upside.com');
        $user->setFirstname('Julien');
        $user->setLastname('Drahcir');
        $user->setRoles(['ROLE_CONTRIBUTOR']);
        $user->setPosition('Lead Dev');
        $user->setPassword($this->passwordHasher->hashPassword($user, 'password'));
        $user->setAgency($this->getReference('agency_Brest'));
        $this->addReference('user_' . 'Julien' , $user);
        //$this->addReference('user_2', $user);
        $manager->persist($user);
        $manager->flush();
    }

    public function getDependencies()
    {
        // Tu retournes ici toutes les classes de fixtures dont ProgramFixtures dépend
        return [
        AgencyFixtures::class,
        ];
    }
}

